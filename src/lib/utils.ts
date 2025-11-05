import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getRandomLofiSpelling = (uppercase: boolean = false): string => {
	const lowercaseLofiSpellings = ["lofi", "lofi", "lo-fi", "lo-fi", "lo fi"];
	const uppercaseLofiSpellings = [
		"Lofi",
		"Lofi",

		"Lo-fi",
		"Lo-fi",

		"Lo-Fi",

		"Lo fi",

		"Lo Fi",

		"LoFi",
	];
	const lofiSpellings = lowercaseLofiSpellings.concat(uppercaseLofiSpellings);

	if (uppercase) {
		const n = Math.floor(Math.random() * uppercaseLofiSpellings.length);
		return uppercaseLofiSpellings[n];
	} else {
		const n = Math.floor(Math.random() * lofiSpellings.length);
		return lofiSpellings[n];
	}
};
