// TODO: make this cooler (colour-coded, icons?, enforced?)
// TODO: this is kind of redundant, must improve the system (e.g. search params in /projects, and then search each project for it)
export type Tech =
	| "Firebase"
	| "Java"
	| "JavaFX"
	| "Java Swing"
	| "Microsoft Paint"
	| "Next.js"
	| "OpenAI API"
	| "React"
	| "TypeScript"
	| "Tailwind CSS"
	| "Yamada UI";

export type ProjectLink = {
	href: string;
	type: string;
};

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
	projectType: "project" | "competition";
	cv: boolean;
	techStack: Tech[];
	startDate: string;
	endDate: string;
	bulletPoints: string[]; // TODO: make bullet-point component!
	summary: string;
	links: ProjectLink[];
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

export type CourseCategory = {
	type: string;
	courses: string[];
};
