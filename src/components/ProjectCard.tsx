import type { FC } from "react";
import { FaGithub } from "react-icons/fa";
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
	image?: boolean;
	variant?: "bullet" | "summary";
	className?: string;
	titleClassName?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
	project,
	image = false,
	variant = "bullet",
	className,
	titleClassName,
}) => {
	return (
		<Card className={cn(className)}>
			{/* TODO: add image of project to the left side */}
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-4">
					<span className={cn("font-bold", titleClassName)}>
						{project.name}
					</span>
					<span className="space-x-1 space-y-1 text-end font-bold">
						{/* TODO: create component for this */}
						{project.techStack.map((tech) => {
							return (
								<Badge key={tech} variant="secondary">
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
			<CardContent>
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
