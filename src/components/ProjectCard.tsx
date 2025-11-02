import type { FC } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/routes/cv/-components/types";
import { BadgeLink } from "./BadgeLink";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export interface ProjectCardProps {
	project: Project;
	github?: string;
	variant?: "bullet" | "summary";
	className?: string;
	titleClassName?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
	project,
	variant = "bullet",
	className,
	titleClassName,
}) => {
	return (
		<Card className={cn(className)}>
			{/* TODO: add image of project to the left side */}
			<CardHeader>
				<CardTitle className="flex flex-col justify-between md:flex-row md:gap-4">
					<span className={cn("font-bold", titleClassName)}>
						{project.name}
					</span>
					<span className="flex h-fit flex-wrap gap-1 font-bold md:justify-end">
						{/* TODO: create component for this */}
						{project.techStack.map((tech) => {
							return (
								<Badge
									className="font-normal-sans"
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
					<span className="font-bold">{project.startDate}</span>
					&nbsp;-&nbsp;
					<span className="space-x-1 font-bold">
						{project.endDate}
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				{variant === "bullet" &&
					project.bulletPoints.map((point) => {
						return <p key={point}>• {point}</p>;
					})}
				{variant === "summary" && (
					<p className="text-md">{project.summary}</p>
				)}
			</CardContent>
			<CardFooter>
				<span className="flex gap-2">
					{project.links?.map((link) => (
						<BadgeLink
							className="text-xs"
							href={link.href}
							key={link.href}
							label={link.type}
							target="_blank"
							type={link.type}
						/>
					))}
				</span>
			</CardFooter>
		</Card>
	);
};
