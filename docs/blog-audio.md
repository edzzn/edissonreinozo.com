# Blog audio generation

Each Spanish and English article can have a pre-generated MP3 narration produced by Google Cloud Text-to-Speech. The browser never receives Google credentials.

## One-time setup

1. In project `gen-lang-client-0253492365`, enable billing and the Cloud Text-to-Speech API.
2. In **APIs & Services → Credentials**, use an API key restricted to the Cloud Text-to-Speech API. The key named “Clave de API 6” in the project is already restricted correctly.
3. Copy `.env.example` to `.env` and set `GOOGLE_CLOUD_TTS_API_KEY` to that key. Do not use a `PUBLIC_` prefix and never commit `.env`.
4. Install `ffmpeg` if it is not already available.

Google also supports Application Default Credentials or a service-account JSON file. In either case, omit `GOOGLE_CLOUD_TTS_API_KEY` and configure `GOOGLE_APPLICATION_CREDENTIALS` or ADC normally.

## Generate narration

Validate article parsing without making API calls:

```bash
bun run audio:check
```

Generate audio for every article:

```bash
bun run audio:generate
```

Generate or replace one article:

```bash
bun run audio:generate -- --locale es --slug hola-mundo --force
```

The output is written to `static/audio/{locale}/{slug}.mp3`. Commit those MP3 files so they are included in deployment. Articles without a generated MP3 simply omit the player.

## Generate cover images

The same local key can generate a shared 16:9 editorial cover for each article through the Gemini API. The key must also allow the Generative Language API.

```bash
bun run image:check
bun run image:generate
```

To replace one cover:

```bash
bun run image:generate -- --slug hola-mundo --force
```

Covers are written to `static/images/posts/{slug}.jpg`. Spanish is used as the canonical prompt source when an article has both Spanish and English translations.
