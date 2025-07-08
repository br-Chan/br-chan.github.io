import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen w-full flex-col justify-start gap-2 bg-white p-4 px-8">
			Work in progress. This is where the GitHub README-esque page will
			be!
		</section>
	);
}
