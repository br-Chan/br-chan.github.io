// TODO: make this cooler (colour-coded, icons?, enforced?)
export type Tech =
	| "Firebase"
	| "Java"
	| "JavaFX"
	| "Java Swing"
	| "Next.js"
	| "OpenAI API"
	| "React"
	| "TypeScript"
	| "Tailwind CSS";

export type Education = {
	name: string;
	grades: string;
	startDate: string;
	endDate: string;
};

export type Experience = {
	role: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	bulletPoints: string[];
};

export type Project = {
	name: string;
	techStack: Tech[];
	startDate: string;
	endDate: string;
	bulletPoints: string[]; // TODO: make bullet-point component!
	summary: string;
};

export type Achievement = {
	name: string;
	date: string;
	sponsor: string;
	bulletPoints: string[];
};

export type SkillOrInterest = {
	point: string;
};
