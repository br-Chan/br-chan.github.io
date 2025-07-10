import { type FC, memo } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../../components/ui/card";
import type { Experience } from "./types";

export interface CVExperienceProps {
	experiences: Experience[];
}

export const CVExperience: FC<CVExperienceProps> = memo(({ experiences }) => {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl underline">Experience</h2>
			{/* TODO: create component for this */}
			{experiences.map((experience) => {
				return (
					<Card key={experience.role + experience.startDate}>
						<CardHeader>
							<CardTitle>
								<span className="font-bold">
									{experience.role}
								</span>
								&nbsp;at&nbsp;
								<span className="font-bold">
									{experience.company}, {experience.location}
								</span>
							</CardTitle>
							<CardDescription>
								{experience.startDate}
								&nbsp;-&nbsp;
								{experience.endDate}
							</CardDescription>
						</CardHeader>
						<CardContent>
							{experience.bulletPoints.map((point) => {
								return <p key={point}>• {point}</p>;
							})}
						</CardContent>
					</Card>
				);
			})}
		</section>
	);
});
