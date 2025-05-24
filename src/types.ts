export type User = {
	id: string;
	email: string;
	password: string;
};

export type TChatMessage = {
	text: string;
	author?: string;
	timestamp?: string;
	isOwn?: boolean;
};
