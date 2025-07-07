import { createFileRoute } from "@tanstack/react-router";
import CVLinks from "@/components/CVLinks";
import CVStatement from "@/components/CVStatement";
import CVTitle from "@/components/CVTitle";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen w-3xl flex-col justify-start gap-2 bg-white p-4 text-center">
			<header className="flex w-full flex-col items-center gap-2">
				<CVTitle />
				<CVLinks />
			</header>

			<Separator />

			<section>
				<CVStatement />
			</section>

			<section></section>
		</section>
	);
}
