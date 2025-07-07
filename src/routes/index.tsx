import { createFileRoute } from "@tanstack/react-router";
import CVStatement from "@/components/CVStatement";
import CVTitle from "@/components/CVTitle";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex min-h-screen w-3xl flex-col justify-start gap-2 bg-white p-4 text-center">
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
