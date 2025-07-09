import { type FC, memo } from "react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project } from "./types";

export interface CVProjectsProps {
	projects: Project[];
}

export const CVProjects: FC<CVProjectsProps> = memo(({ projects }) => {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl underline">Projects</h2>
			{/* TODO: create component for this */}
			{projects.map((project) => {
				return (
					<Card key={project.name}>
						<CardHeader>
							<CardTitle>
								<span className="font-bold">
									{project.name}
								</span>
								&nbsp;|&nbsp;
								<span className="space-x-1 font-bold">
									{/* TODO: create component for this */}
									{project.techStack.map((tech) => {
										return (
											<Badge
												key={tech}
												variant="secondary"
											>
												{tech}
											</Badge>
										);
									})}
								</span>
							</CardTitle>
							<CardDescription>
								<span className="font-bold">
									{project.startDate}
								</span>
								&nbsp;-&nbsp;
								<span className="space-x-1 font-bold">
									{project.endDate}
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent>
							{project.bulletPoints.map((point) => {
								return <p key={point}>• {point}</p>;
							})}
						</CardContent>
					</Card>
				);
			})}
		</section>
	);
});
