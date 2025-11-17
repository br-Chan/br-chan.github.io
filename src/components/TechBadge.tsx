import { type FC, memo } from "react";
import type { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export type TechBadgeProps = {
	className?: string;
	label: string;
	startIcon: IconType;
	themeColor: string;
};

export const TechBadge: FC<TechBadgeProps> = memo(
	({ className, label, startIcon, themeColor }) => {
		const Icon = startIcon;
		return (
			<Badge
				className={cn(
					`border-[${themeColor}] text-[${themeColor}] cursor-default text-md`,
					className,
				)}
				variant="outline"
			>
				<Icon className={`text-[${themeColor}]`} />
				{label}
			</Badge>
		);
	},
);
