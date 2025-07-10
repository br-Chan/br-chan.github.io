import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CVLinks() {
	return (
		<div className="flex h-5 items-center justify-center gap-4 text-sm">
			{/* TODO: extract these into a json? maybe not worth the effort */}
			<Badge asChild className="bg-[#0077b5] text-md">
				<a
					className="hover:underline"
					href="https://www.linkedin.com/in/brandon-sh-chan/"
					rel="noopener"
					target="_blank"
				>
					<FaLinkedin />
					brandon-sh-chan
				</a>
			</Badge>
			<Separator orientation="vertical" />
			<Badge asChild className="text-md">
				<a
					className="hover:underline"
					href="https://github.com/br-Chan"
					rel="noopener"
					target="_blank"
				>
					<FaGithub />
					br-Chan
				</a>
			</Badge>
			<Separator orientation="vertical" />
			<Badge asChild className="bg-[#FF0000] text-md">
				<a
					className="hover:underline"
					href="https://www.youtube.com/@br-Chan-g5l"
					rel="noopener"
					target="_blank"
				>
					<FaYoutube />
					br-Chan
				</a>
			</Badge>
		</div>
	);
}
