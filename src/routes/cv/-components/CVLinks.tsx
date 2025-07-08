import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";

export default function CVLinks() {
	return (
		<div className="flex h-5 items-center justify-center gap-4 text-sm">
			{/* TODO: extract these into a json? maybe not worth the effort */}
			<Badge asChild>
				<a
					className="hover:underline"
					target="_blank"
					href="https://www.linkedin.com/in/brandon-sh-chan/"
					rel="noopener"
				>
					brandon-sh-chan
				</a>
			</Badge>
			<Separator orientation="vertical" />
			<Badge asChild>
				<a
					className="hover:underline"
					target="_blank"
					href="https://github.com/br-Chan"
					rel="noopener"
				>
					br-Chan
				</a>
			</Badge>
			<Separator orientation="vertical" />
			<Badge asChild>
				<a
					className="hover:underline"
					target="_blank"
					href="https://www.youtube.com/@br-Chan-g5l"
					rel="noopener"
				>
					br-Chan
				</a>
			</Badge>
		</div>
	);
}
