import { type FC, memo } from "react";
import type { Education } from "./types";

export interface CVEducationProps {
	educations: Education[];
	showGrades?: boolean;
}

export const CVEducation: FC<CVEducationProps> = memo(
	({ educations, showGrades = false }) => {
		return (
			<section className="flex flex-col">
				<h2 className="font-bold text-2xl underline">Education</h2>
				{/* TODO: create component for this */}
				{educations.map((education) => {
					return (
						<section
							className="flex w-full justify-between"
							key={education.name + education.startDate}
						>
							<span className="font-bold">
								• {education.name}
								&nbsp;
								{showGrades && `(${education.grades})`}
							</span>
							<span>
								{education.startDate}
								&nbsp;-&nbsp;
								{education.endDate}
							</span>
						</section>
					);
				})}
			</section>
		);
	},
);
