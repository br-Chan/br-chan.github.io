import { type FC, memo } from "react";
import type { Achievement } from "./types";

export interface CVAchievementsProps {
	achievements: Achievement[];
}

export const CVAchievements: FC<CVAchievementsProps> = memo(
	({ achievements }) => {
		return (
			<section className="flex flex-col gap-2">
				<h2 className="font-bold text-2xl underline">Achievements</h2>

				{achievements.map((achievement) => {
					return (
						<section key={achievement.name}>
							<section className="flex w-full justify-between">
								<span className="font-bold">
									{achievement.name}
									&nbsp;by&nbsp;
									{achievement.sponsor}
								</span>
								<span>{achievement.date}</span>
							</section>
							{achievement.bulletPoints.map((point) => {
								return <p key={point}>• {point}</p>;
							})}
						</section>
					);
				})}
			</section>
		);
	},
);
