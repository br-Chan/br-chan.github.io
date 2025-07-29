import { type FC, memo } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/routes/cv/-components/types";

export interface ProjectsProps {
	projects: Project[];
}

export const Projects: FC<ProjectsProps> = memo(({ projects }) => {
	return (
		<div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
			{projects.map((project) => {
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
