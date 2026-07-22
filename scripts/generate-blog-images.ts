import { GoogleGenAI } from '@google/genai';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const apiKey = process.env.GOOGLE_CLOUD_TTS_API_KEY;
const outputDirectory = 'static/images/posts';

type Options = { slug?: string; force: boolean; dryRun: boolean };
type PostSource = { slug: string; path: string; locale: 'es' | 'en' };

function parseOptions(argv: string[]): Options {
	const options: Options = { force: false, dryRun: false };
	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (argument === '--force') options.force = true;
		else if (argument === '--dry-run') options.dryRun = true;
		else if (argument === '--slug') {
			options.slug = argv[index + 1];
			if (!options.slug) throw new Error('--slug requires a value');
			index += 1;
		} else throw new Error(`Unknown option: ${argument}`);
	}
	return options;
}

function getFrontmatterValue(markdown: string, field: string): string {
	const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || '';
	const match = frontmatter.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
	return match?.[1]?.trim().replace(/^['"]|['"]$/g, '') || '';
}

function getExcerpt(markdown: string): string {
	return markdown
		.replace(/^---[\s\S]*?^---\s*/m, '')
		.replace(/```[\s\S]*?```/g, '')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[#>*_`~]/g, '')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, 1_800);
}

function buildPrompt(markdown: string, locale: 'es' | 'en'): string {
	const title = getFrontmatterValue(markdown, 'title');
	const description = getFrontmatterValue(markdown, 'description');
	const tags = getFrontmatterValue(markdown, 'tags');
	const excerpt = getExcerpt(markdown);

	return `Create a 16:9 editorial cover illustration for a thoughtful software engineering blog post.

Article language: ${locale === 'es' ? 'Spanish' : 'English'}
Title: ${title}
Summary: ${description}
Topics: ${tags}
Article context: ${excerpt}

Art direction: sophisticated tactile editorial collage with hand-cut paper, precise technical drafting marks, subtle screen-print texture, and one strong central visual metaphor derived from the article. Use warm ivory, ink black, rebeccapurple (#663399), muted lilac, and a very small acid-green accent. Refined, intelligent, slightly playful, with generous negative space and strong depth. Avoid generic futuristic AI imagery, glowing brains, humanoid robots, stock-photo aesthetics, purple gradients, or literal screenshots.

Composition: wide 16:9 landscape, focal point near the center, safe margins for responsive cropping. No words, letters, numbers, logos, UI text, signatures, borders, or visible watermarks.`;
}

async function getPostSources(): Promise<PostSource[]> {
	const sources = new Map<string, PostSource>();
	const directories = [
		{ path: 'src/posts', locale: 'es' as const },
		{ path: 'src/posts/en', locale: 'en' as const }
	];

	for (const directory of directories) {
		const files = (await readdir(directory.path)).filter((file) => file.endsWith('.md')).sort();
		for (const file of files) {
			const slug = basename(file, '.md');
			if (!sources.has(slug)) {
				sources.set(slug, { slug, path: join(directory.path, file), locale: directory.locale });
			}
		}
	}
	return Array.from(sources.values()).sort((a, b) => a.slug.localeCompare(b.slug));
}

async function main() {
	const options = parseOptions(process.argv.slice(2));
	if (!options.dryRun && !apiKey) throw new Error('GOOGLE_CLOUD_TTS_API_KEY is not set in .env');

	const ai = options.dryRun ? undefined : new GoogleGenAI({ apiKey });
	await mkdir(outputDirectory, { recursive: true });
	const sources = (await getPostSources()).filter(
		(source) => !options.slug || source.slug === options.slug
	);

	for (const source of sources) {
		const outputPath = join(outputDirectory, `${source.slug}.jpg`);
		if (existsSync(outputPath) && !options.force && !options.dryRun) {
			console.log(`Skipping ${source.slug}; cover already exists. Use --force to replace it.`);
			continue;
		}

		const markdown = await readFile(source.path, 'utf8');
		const prompt = buildPrompt(markdown, source.locale);
		console.log(
			`${options.dryRun ? 'Checked' : 'Generating'} ${source.slug} from ${source.locale} source`
		);
		if (options.dryRun || !ai) continue;

		const interaction = await ai.interactions.create({
			model: 'gemini-3.1-flash-image',
			input: prompt,
			response_format: {
				type: 'image',
				mime_type: 'image/jpeg',
				aspect_ratio: '16:9',
				image_size: '1K'
			}
		});

		const imageData = interaction.output_image?.data;
		if (!imageData) throw new Error(`Google returned no image for ${source.slug}`);
		const sourcePath = join(outputDirectory, `.${source.slug}.source.jpg`);
		await writeFile(sourcePath, Buffer.from(imageData, 'base64'));
		try {
			execFileSync('ffmpeg', [
				'-hide_banner',
				'-loglevel',
				'error',
				'-i',
				sourcePath,
				'-q:v',
				'6',
				'-y',
				outputPath
			]);
		} catch {
			throw new Error('ffmpeg is required to optimize generated cover images.');
		} finally {
			await rm(sourcePath, { force: true });
		}
		console.log(`  Wrote ${outputPath}`);
	}
}

main().catch((error: unknown) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});
