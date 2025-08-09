import { createFileRoute } from "@tanstack/react-router";
import { FaCaretUp } from "react-icons/fa";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useStarContext } from "@/context/starContext";

export const Route = createFileRoute("/todo/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { setStarColor } = useStarContext();
	setStarColor("purple");

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
					<li>- </li>
					<li>- this todo list</li>
				</ol>
			</CardContent>
		</Card>
	);
}
