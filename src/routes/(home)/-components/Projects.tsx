import { type FC, memo } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/routes/cv/-components/types";

export interface ProjectsProps {
	projects: Project[];
}

export const Projects: FC<ProjectsProps> = memo(({ projects }) => {
	return (
		<>
			{projects.map((project) => {
				return (
					<ProjectCard
						key={project.name}
						project={project}
						titleClassName="text-xl"
						variant="summary"
					/>
				);
			})}
		</>
	);
});
