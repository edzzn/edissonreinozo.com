import textToSpeech from '@google-cloud/text-to-speech';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';

const { TextToSpeechClient } = textToSpeech;
const projectId = process.env.GOOGLE_CLOUD_PROJECT || 'gen-lang-client-0253492365';
const apiKey = process.env.GOOGLE_CLOUD_TTS_API_KEY;
const maxBytesPerRequest = 4_500;

type Locale = 'es' | 'en';

type Options = {
	locale?: Locale;
	slug?: string;
	force: boolean;
	dryRun: boolean;
};

const localeConfig = {
	es: {
		postsDirectory: 'src/posts',
		outputDirectory: 'static/audio/es',
		languageCode: 'es-US',
		voiceName: 'es-US-Chirp3-HD-Charon',
		codeNotice: 'Ejemplo de código omitido.'
	},
	en: {
		postsDirectory: 'src/posts/en',
		outputDirectory: 'static/audio/en',
		languageCode: 'en-US',
		voiceName: 'en-US-Chirp3-HD-Charon',
		codeNotice: 'Code example omitted.'
	}
} as const;

function parseOptions(argv: string[]): Options {
	const options: Options = { force: false, dryRun: false };

	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (argument === '--force') options.force = true;
		else if (argument === '--dry-run') options.dryRun = true;
		else if (argument === '--locale') {
			const locale = argv[index + 1];
			if (locale !== 'es' && locale !== 'en') throw new Error('--locale must be es or en');
			options.locale = locale;
			index += 1;
		} else if (argument === '--slug') {
			options.slug = argv[index + 1];
			if (!options.slug) throw new Error('--slug requires a value');
			index += 1;
		} else {
			throw new Error(`Unknown option: ${argument}`);
		}
	}

	return options;
}

function getTitle(markdown: string, slug: string): string {
	const match = markdown.match(/^---[\s\S]*?^title:\s*(.+)$/m);
	return match?.[1]?.trim().replace(/^['"]|['"]$/g, '') || slug.replaceAll('-', ' ');
}

function markdownToNarration(markdown: string, locale: Locale, slug: string): string {
	const config = localeConfig[locale];
	const title = getTitle(markdown, slug);
	const body = markdown
		.replace(/^---[\s\S]*?^---\s*/m, '')
		.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
		.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
		.replace(/```[\s\S]*?```/g, `\n${config.codeNotice}\n`)
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/^#{1,6}\s+(.+)$/gm, '$1.')
		.replace(/^\s*[-*+]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/^>\s?/gm, '')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/[*_~]/g, '')
		.replace(/^---+$/gm, '')
		.replace(/https?:\/\/\S+/g, '')
		.replace(/[ \t]+/g, ' ')
		.replace(/\n{3,}/g, '\n\n')
		.trim();

	return `${title}.\n\n${body}`;
}

function byteLength(value: string): number {
	return Buffer.byteLength(value, 'utf8');
}

function splitOversizedText(text: string): string[] {
	const chunks: string[] = [];
	let current = '';

	for (const word of text.split(/\s+/)) {
		const candidate = current ? `${current} ${word}` : word;
		if (byteLength(candidate) > maxBytesPerRequest && current) {
			chunks.push(current);
			current = word;
		} else {
			current = candidate;
		}
	}

	if (current) chunks.push(current);
	return chunks;
}

function splitNarration(text: string): string[] {
	const units = text
		.split(/(?<=[.!?])\s+|\n{2,}/)
		.flatMap((unit) =>
			byteLength(unit) > maxBytesPerRequest ? splitOversizedText(unit) : [unit.trim()]
		)
		.filter(Boolean);

	const chunks: string[] = [];
	let current = '';

	for (const unit of units) {
		const candidate = current ? `${current} ${unit}` : unit;
		if (byteLength(candidate) > maxBytesPerRequest && current) {
			chunks.push(current);
			current = unit;
		} else {
			current = candidate;
		}
	}

	if (current) chunks.push(current);
	return chunks;
}

async function synthesizePost(
	client: InstanceType<typeof TextToSpeechClient>,
	locale: Locale,
	slug: string,
	chunks: string[],
	outputPath: string
) {
	const config = localeConfig[locale];
	const temporaryDirectory = await mkdtemp(join(tmpdir(), `blog-audio-${locale}-${slug}-`));

	try {
		const partPaths: string[] = [];
		for (const [index, text] of chunks.entries()) {
			console.log(`  Synthesizing part ${index + 1}/${chunks.length}`);
			const [response] = await client.synthesizeSpeech({
				input: { text },
				voice: {
					languageCode: config.languageCode,
					name: config.voiceName
				},
				audioConfig: {
					audioEncoding: 'MP3'
				}
			});

			if (!response.audioContent) throw new Error(`Google returned no audio for ${slug}`);
			const partPath = join(temporaryDirectory, `part-${String(index + 1).padStart(3, '0')}.mp3`);
			await writeFile(partPath, response.audioContent as Uint8Array);
			partPaths.push(partPath);
		}

		const concatFile = join(temporaryDirectory, 'parts.txt');
		await writeFile(
			concatFile,
			partPaths.map((path) => `file '${path.replaceAll("'", "'\\''")}'`).join('\n')
		);
		execFileSync('ffmpeg', [
			'-hide_banner',
			'-loglevel',
			'error',
			'-f',
			'concat',
			'-safe',
			'0',
			'-i',
			concatFile,
			'-c',
			'copy',
			'-y',
			outputPath
		]);
	} finally {
		await rm(temporaryDirectory, { recursive: true, force: true });
	}
}

async function main() {
	const options = parseOptions(process.argv.slice(2));
	const locales: Locale[] = options.locale ? [options.locale] : ['es', 'en'];
	const client = options.dryRun
		? undefined
		: new TextToSpeechClient({
				projectId,
				...(apiKey ? { apiKey, fallback: true } : {})
			});

	if (!options.dryRun) {
		try {
			execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
		} catch {
			throw new Error('ffmpeg is required to combine long article audio. Install it and retry.');
		}
	}

	for (const locale of locales) {
		const config = localeConfig[locale];
		await mkdir(config.outputDirectory, { recursive: true });
		const files = (await readdir(config.postsDirectory))
			.filter((file) => file.endsWith('.md'))
			.filter((file) => !options.slug || basename(file, '.md') === options.slug)
			.sort();

		for (const file of files) {
			const slug = basename(file, '.md');
			const outputPath = join(config.outputDirectory, `${slug}.mp3`);
			if (existsSync(outputPath) && !options.force) {
				console.log(`Skipping ${locale}/${slug}; audio already exists. Use --force to replace it.`);
				continue;
			}

			const markdown = await readFile(join(config.postsDirectory, file), 'utf8');
			const narration = markdownToNarration(markdown, locale, slug);
			const chunks = splitNarration(narration);
			console.log(
				`${options.dryRun ? 'Checked' : 'Generating'} ${locale}/${slug}: ${narration.length} characters, ${chunks.length} request(s)`
			);

			if (!options.dryRun && client) {
				await synthesizePost(client, locale, slug, chunks, outputPath);
				console.log(`  Wrote ${outputPath}`);
			}
		}
	}
}

main().catch((error: unknown) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});
