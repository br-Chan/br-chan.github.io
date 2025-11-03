import { type FC, memo } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/routes/cv/-components/types";

export interface ProjectsProps {
	projects: Project[];
	projectType?: "project" | "competition";
}

export const Projects: FC<ProjectsProps> = memo(({ projects, projectType }) => {
	return (
		<div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
			{projects
				.filter(
					(project) =>
						!projectType || project.projectType === projectType,
				)
				.map((project) => {
					return (
						<ProjectCard
							key={project.name}
							project={project}
							titleClassName="text-lg"
							variant="summary"
						/>
					);
				})}
		</div>
	);
});
