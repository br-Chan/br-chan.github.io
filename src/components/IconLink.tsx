import { motion } from "motion/react";
import { type FC, memo } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export type IconLinkProps = {
	className?: string;
	href: string;
	target?: React.HTMLAttributeAnchorTarget | undefined;
	icon?: IconType;
	type?: "GitHub" | "YouTube" | "LinkedIn";
};

export const IconLink: FC<IconLinkProps> = memo(
	({ className, href, target = "_self", icon, type }) => {
		let typeColor = "bg-black";
		if (!icon) {
			switch (type) {
				case "GitHub":
					icon = FaGithub;
					break;
				case "YouTube":
					icon = FaYoutube;
					typeColor = "bg-[#FF0000]";
					break;
				case "LinkedIn":
					icon = FaLinkedin;
					typeColor = "bg-[#0077b5]";
					break;
				default:
					undefined;
			}
		}
		const Icon = icon;

		return (
			<motion.span
				whileHover={{
					y: -2,
				}}
			>
				<Button
					asChild
					className={cn(
						"bg-black text-sm text-white",
						typeColor,
						`hover:${typeColor}`,
						className,
					)}
					size="icon"
					variant="secondary"
				>
					<a
						className={cn(className)}
						href={href}
						rel="noopener"
						target={target}
					>
						{!!Icon && <Icon className={cn(className, "p-2")} />}
					</a>
				</Button>
			</motion.span>
		);
	},
);
