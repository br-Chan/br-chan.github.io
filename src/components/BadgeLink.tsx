import { type FC, memo } from "react";
import {
	FaExternalLinkAlt,
	FaGithub,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export type BadgeLinkProps = {
	className?: string;
	href: string;
	label: string;
	target?: React.HTMLAttributeAnchorTarget | undefined;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	type?: "GitHub" | "YouTube" | "LinkedIn";
};

export const BadgeLink: FC<BadgeLinkProps> = memo(
	({
		className,
		href,
		label,
		target = "_self",
		startIcon,
		endIcon = <FaExternalLinkAlt />,
		type,
	}) => {
		let typeColor = "";
		if (!startIcon) {
			switch (type) {
				case "GitHub":
					startIcon = <FaGithub />;
					break;
				case "YouTube":
					startIcon = <FaYoutube />;
					typeColor = "bg-[#FF0000]";
					break;
				case "LinkedIn":
					startIcon = <FaLinkedin />;
					typeColor = "bg-[#0077b5]";
					break;
				default:
					undefined;
			}
		}

		return (
			<motion.span
				whileHover={{
					y: -2,
				}}
			>
				<Badge
					asChild
					className={cn(
						"bg-black text-sm text-white",
						typeColor,
						className,
					)}
				>
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
			</motion.span>
		);
	},
);
