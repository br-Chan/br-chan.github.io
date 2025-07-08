import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import CVEducation from "@/routes/cv/-components/CVEducation";
import CVExperience from "@/routes/cv/-components/CVExperience";
import CVLinks from "@/routes/cv/-components/CVLinks";
import CVProjects from "@/routes/cv/-components/CVProjects";
import CVStatement from "@/routes/cv/-components/CVStatement";
import CVTitle from "@/routes/cv/-components/CVTitle";

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

			<CVProjects />
		</section>
	);
}
