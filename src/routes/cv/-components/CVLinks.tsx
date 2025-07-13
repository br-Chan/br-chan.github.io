import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BadgeLink } from "@/components/BadgeLink";
import { Separator } from "@/components/ui/separator";

export default function CVLinks() {
	return (
		<div className="flex h-5 items-center justify-center gap-4 text-sm">
			{/* TODO: extract these into a json? maybe not worth the effort */}
			<BadgeLink
				className="bg-[#0077b5] text-md"
				href="https://www.linkedin.com/in/brandon-sh-chan/"
				label="brandon-sh-chan"
				startIcon={<FaLinkedin />}
				target="_blank"
			/>
			<Separator orientation="vertical" />
			<BadgeLink
				className="text-md"
				href="https://github.com/br-Chan"
				label="br-Chan"
				startIcon={<FaGithub />}
				target="_blank"
			/>
			<Separator orientation="vertical" />
			<BadgeLink
				className="bg-[#FF0000] text-md"
				href="https://www.youtube.com/@br-Chan-g5l"
				label="br-Chan"
				startIcon={<FaYoutube />}
				target="_blank"
			/>
		</div>
	);
}
