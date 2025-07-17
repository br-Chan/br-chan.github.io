import { Link } from "@tanstack/react-router";
import { FaBackward, FaCaretUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const NotFoundCard = () => {
	return (
		<Card className="w-md">
			<CardHeader className="text-2xl">
				<CardTitle>Page Not Found</CardTitle>
				<CardAction>
					<a href={"/"} rel="noopener" target="_blank">
						<FaCaretUp />
					</a>
				</CardAction>
			</CardHeader>
			<CardContent>...or under construction.</CardContent>
			<CardFooter>
				<Button asChild className="w-full">
					<Link to="/">
						<FaBackward />
						Go home
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};
