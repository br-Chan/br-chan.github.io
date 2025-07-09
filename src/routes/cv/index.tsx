import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import CVEducation from "./-components/CVEducation";
import CVExperience from "./-components/CVExperience";
import CVLinks from "./-components/CVLinks";
import { CVProjects } from "./-components/CVProjects";
import CVStatement from "./-components/CVStatement";
import CVTitle from "./-components/CVTitle";
import type { Project } from "./-components/types";
import rawProjects from "./-cv-data/projects.json";

export const Route = createFileRoute("/cv/")({
	component: CV,
});

function CV() {
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

			<CVProjects projects={rawProjects as Project[]} />
		</section>
	);
}
