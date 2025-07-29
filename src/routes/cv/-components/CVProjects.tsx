import { type FC, memo } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "./types";

export interface CVProjectsProps {
	projects: Project[];
}

export const CVProjects: FC<CVProjectsProps> = memo(({ projects }) => {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl underline">Projects</h2>
			{projects
				.filter((project) => project.cv)
				.map((project) => {
					return <ProjectCard key={project.name} project={project} />;
				})}
		</section>
	);
});
