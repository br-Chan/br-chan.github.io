import type { FC } from "react";
import { cn } from "@/lib/utils";

export interface SubSectionProps {
	children: React.ReactNode;
	className?: string;
	title: string;
	titleClassName?: string;
	titleOutlineColor: string;
}

export const SubSection: FC<SubSectionProps> = ({
	children,
	className,
	title,
	titleClassName,
	titleOutlineColor,
}) => {
	return (
		<section
			className={cn(
				"flex flex-col gap-4 rounded-lg border-4 p-4",
				className,
			)}
		>
			<h3
				className={cn(
					"font-medium text-2xl text-white",
					titleClassName,
				)}
				style={{
					WebkitTextStroke: "6px",
					WebkitTextStrokeColor: titleOutlineColor,
					paintOrder: "stroke fill",
				}}
			>
				{title}
			</h3>
			{children}
		</section>
	);
};
