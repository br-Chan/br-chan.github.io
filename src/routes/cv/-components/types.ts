export type Tech =
	| "Firebase"
	| "Java"
	| "JavaFX"
	| "Next.js"
	| "OpenAI API"
	| "React"
	| "TypeScript"
	| "Tailwind CSS";

export type Project = {
	name: string;
	techStack: Tech[];
	startDate: string;
	endDate: string;
	bulletPoints: string[];
};
