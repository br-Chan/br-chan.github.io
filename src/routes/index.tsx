import { createFileRoute } from "@tanstack/react-router";
import CVStatement from "@/components/CVStatement";
import CVTitle from "@/components/CVTitle";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="gap-2 flex flex-col min-h-screen text-center w-3xl p-4 justify-start bg-white">
			<header className="items-center text-[calc(10px+2vmin)]">
				<CVTitle />
			</header>
			<Separator />
			<body>
				<section>
					<CVStatement />
				</section>
			</body>
		</div>
	);
}
