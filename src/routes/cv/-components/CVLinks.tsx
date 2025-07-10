import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";

export default function CVLinks() {
	return (
		<div className="flex h-5 items-center justify-center gap-4 text-sm">
			{/* TODO: extract these into a json? maybe not worth the effort */}
			<Badge asChild>
				<a
					className="hover:underline"
					href="https://www.linkedin.com/in/brandon-sh-chan/"
					rel="noopener"
					target="_blank"
				>
					brandon-sh-chan
				</a>
			</Badge>
			<Separator orientation="vertical" />
			<Badge asChild>
				<a
					className="hover:underline"
					href="https://github.com/br-Chan"
					rel="noopener"
					target="_blank"
				>
					br-Chan
				</a>
			</Badge>
			<Separator orientation="vertical" />
			<Badge asChild>
				<a
					className="hover:underline"
					href="https://www.youtube.com/@br-Chan-g5l"
					rel="noopener"
					target="_blank"
				>
					br-Chan
				</a>
			</Badge>
		</div>
	);
}
