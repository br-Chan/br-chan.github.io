import type { FC } from "react";
import { cn } from "@/lib/utils";

export interface SubSectionProps {
	children: React.ReactNode;
	className?: string;
	title: string;
	titleClassName?: string;
}

export const SubSection: FC<SubSectionProps> = ({
	children,
	className,
	title,
	titleClassName,
}) => {
	return (
		<section
			className={cn(
				"flex flex-col gap-4 rounded-lg bg-zinc-400/30 p-4",
				className,
			)}
		>
			<h3 className={cn("font-bold text-2xl", titleClassName)}>
				{title}
			</h3>
			{children}
		</section>
	);
};
