import type { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export type BadgeLinkProps = {
	className?: string;
	href: string;
	label: string;
	target?: React.HTMLAttributeAnchorTarget | undefined;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
};

export const BadgeLink: FC<BadgeLinkProps> = ({
	className,
	href,
	label,
	target = "_self",
	startIcon,
	endIcon = <FaExternalLinkAlt />,
}) => {
	return (
		<Badge asChild className={cn("bg-black text-sm text-white", className)}>
			<a
				className="hover:underline"
				href={href}
				rel="noopener"
				target={target}
			>
				{!!startIcon && startIcon}
				{label}
				{endIcon}
			</a>
		</Badge>
	);
};
