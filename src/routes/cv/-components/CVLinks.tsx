import { BadgeLink } from "@/components/BadgeLink";
import { Separator } from "@/components/ui/separator";

export const CVLinks = () => {
	return (
		<div className="flex h-5 items-center gap-4 text-sm">
			{/* TODO: extract these into a json? maybe not worth the effort */}
			<BadgeLink
				className="text-md"
				href="https://www.linkedin.com/in/brandon-sh-chan/"
				label="brandon-sh-chan"
				target="_blank"
				type="LinkedIn"
			/>
			<Separator orientation="vertical" />
			<BadgeLink
				className="text-md"
				href="https://github.com/br-Chan"
				label="br-Chan"
				target="_blank"
				type="GitHub"
			/>
			<Separator orientation="vertical" />
			<BadgeLink
				className=" text-md"
				href="https://www.youtube.com/@br-Chan-g5l"
				label="br-Chan"
				target="_blank"
				type="YouTube"
			/>
		</div>
	);
};
