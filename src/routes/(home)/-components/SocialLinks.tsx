import { IconLink } from "@/components/IconLink";

export const SocialLinks = () => {
	return (
		<span className="flex gap-2">
			<IconLink
				className="size-10"
				href="https://www.linkedin.com/in/brandon-sh-chan/"
				target="_blank"
				type="LinkedIn"
			/>
			<IconLink
				className="size-10"
				href="https://github.com/br-Chan"
				target="_blank"
				type="GitHub"
			/>
			<IconLink
				className="size-10"
				href="https://www.youtube.com/@br-Chan-g5l"
				target="_blank"
				type="YouTube"
			/>
		</span>
	);
};
