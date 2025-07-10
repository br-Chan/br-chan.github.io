import type { FC } from "react";
import type { SkillOrInterest } from "./types";

export interface CVSkillsAndInterestsProps {
	skillsAndInterests: SkillOrInterest[];
}

export const CVSkillsAndInterests: FC<CVSkillsAndInterestsProps> = ({
	skillsAndInterests,
}) => {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl underline">
				Skills and Interests
			</h2>
			<section className="flex flex-col">
				{skillsAndInterests.map((skillOrInterest) => {
					return (
						<span key={skillOrInterest.point}>
							• {skillOrInterest.point}
						</span>
					);
				})}
			</section>
		</section>
	);
};
