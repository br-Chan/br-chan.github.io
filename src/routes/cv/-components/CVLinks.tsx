import { BadgeLink } from "@/components/BadgeLink";
export const CVLinks = () => {
	return (
		<div className="flex h-fit flex-wrap gap-1 text-start text-sm">
			{/* TODO: extract these into a json? maybe not worth the effort */}
			<BadgeLink
				className="text-md"
				href="https://www.linkedin.com/in/brandon-sh-chan/"
				label="brandon-sh-chan"
				target="_blank"
				type="LinkedIn"
			/>
			<BadgeLink
				className="text-md"
				href="https://github.com/br-Chan"
				label="br-Chan"
				target="_blank"
				type="GitHub"
			/>
			<BadgeLink
				className=" text-md"
				href="https://www.youtube.com/@br-Chan-demos"
				label="br-Chan"
				target="_blank"
				type="YouTube"
			/>
		</div>
	);
};
