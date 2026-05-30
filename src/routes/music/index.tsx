import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useStarContext } from "@/context/StarContext";

export const Route = createFileRoute("/music/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { setStarColor } = useStarContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run upon first render only
	useEffect(() => {
		setStarColor("#00f2ff");
	}, []);

	return <div>Hello "/music/"!</div>;
}
