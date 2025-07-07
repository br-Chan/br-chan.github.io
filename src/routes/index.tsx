import { createFileRoute } from "@tanstack/react-router";
import CVEducation from "@/components/CVEducation";
import CVExperience from "@/components/CVExperience";
import CVLinks from "@/components/CVLinks";
import CVStatement from "@/components/CVStatement";
import CVTitle from "@/components/CVTitle";
import { Separator } from "@/components/ui/separator";
import CVProjects from "@/components/CVProjects";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen w-3xl flex-col justify-start gap-2 bg-white p-4 px-8">
			<header className="flex w-full flex-col items-center gap-2 text-center">
				<CVTitle />
				<CVLinks />
			</header>

			<Separator />

			<CVStatement />

			<CVEducation />

			<CVExperience />

			<CVProjects />
		</section>
	);
}
