export interface Post {
	title: string;
	date: string;
	description?: string;
	published: boolean;
	slug?: string;
	tags?: string[];
}
