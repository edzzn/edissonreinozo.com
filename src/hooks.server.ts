import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.url.pathname === '/en' || event.url.pathname.startsWith('/en/') ? 'en' : 'es';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html lang="es">', `<html lang="${lang}">`)
	});
};
