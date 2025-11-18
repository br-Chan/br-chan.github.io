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
					As of Nov 17 2025, this site is in a complete state! Here's
					a list of stretch goals:
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
					<li>- revamp the tech stack tags</li>
					<li>- add images</li>
					<li>- add dark mode</li>
					<li>- have more interactivity</li>
					<li>
						- add '2-word' mode: all items of text reduced to 2
						words
					</li>
					<li>- add 'Serious' mode: no Comic Sans fonts</li>
					<li>- get the groceries</li>
				</ol>
			</CardContent>
		</Card>
	);
}
