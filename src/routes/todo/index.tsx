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
		setStarColor("#7c007e");
	}, []);

	return (
		<Card className="z-1 mt-8">
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
					<li>- add the languages / tech subsection</li>
					<li>- revamp the tech stack tags</li>
					<li>- add images</li>
					<li>- add dark mode</li>
					<li>
						- add '2-word' mode: all items of text reduced to 2
						words
					</li>
					<li>- add 'I have no whimsy' mode: no Comic Sans fonts</li>
					<li>- get the groceries</li>
				</ol>
			</CardContent>
		</Card>
	);
}
