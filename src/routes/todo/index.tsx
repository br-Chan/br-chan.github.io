import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { FaCaretUp } from "react-icons/fa";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useStarContext } from "@/context/StarContext";

export const Route = createFileRoute("/todo/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { setStarColor } = useStarContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run upon first render only
	useEffect(() => {
		setStarColor("purple");
	}, []);

	return (
		<Card className="z-1 mt-8 w-md">
			<CardHeader className="text-2xl">
				<CardTitle>TODO</CardTitle>
				<CardDescription>
					This site is under heavy (-ish) development! Here's a list
					of what still needs doing:
				</CardDescription>
				<CardAction>
					<a
						href={"https://www.youtube.com/watch?v=xvFZjo5PgG0"}
						rel="noopener"
						target="_blank"
					>
						<FaCaretUp />
					</a>
				</CardAction>
			</CardHeader>
			<CardContent>
				<ol>
					<li>- dark mode</li>
					<li>- Languages / tech subsection</li>
					<li>- Volunteering subsection</li>
					<li>- the groceries</li>
					<li>- the rest of this todo list</li>
				</ol>
			</CardContent>
		</Card>
	);
}
