import { motion } from "motion/react";
import { type FC, memo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaItchIo, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export type BadgeLinkProps = {
	className?: string;
	href: string;
	label: string;
	target?: React.HTMLAttributeAnchorTarget | undefined;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	type?: "GitHub" | "YouTube" | "LinkedIn" | "Itch.io";
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
				case "Itch.io":
					startIcon = <FaItchIo />;
					typeColor = "bg-[#FA5C5C]";
					break;
				default:
					undefined;
			}
		}

		return (
			<motion.span
				transition={{
					type: "tween",
					duration: 0.1,
				}}
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
					<a href={href} rel="noopener" target={target}>
						{!!startIcon && startIcon}
						{label}
						{endIcon}
					</a>
				</Badge>
			</motion.span>
		);
	},
);
