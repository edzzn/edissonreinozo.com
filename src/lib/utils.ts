import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export type Locale = 'es' | 'en';

export function formatDate(date: string, locale: Locale = 'es'): string {
	const d = new Date(date);
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return d.toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', options);
}

export function localizedPath(pathname: string, targetLocale: Locale): string {
	const englishToSpanish: Record<string, string> = {
		'/en': '/',
		'/en/about': '/sobre-mi',
		'/en/contact': '/contacto',
		'/en/blog': '/blog'
	};
	const spanishToEnglish: Record<string, string> = Object.fromEntries(
		Object.entries(englishToSpanish).map(([english, spanish]) => [spanish, english])
	);

	const blogMatch = pathname.match(/^\/(?:en\/)?blog(?:\/(.*))?$/);
	if (blogMatch) {
		const suffix = blogMatch[1] ? `/${blogMatch[1]}` : '';
		return targetLocale === 'en' ? `/en/blog${suffix}` : `/blog${suffix}`;
	}

	return targetLocale === 'en'
		? spanishToEnglish[pathname] || '/en'
		: englishToSpanish[pathname] || '/';
}
