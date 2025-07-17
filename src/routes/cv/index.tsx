import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import rawAchievements from "@/data/achievements.json";
import rawEducations from "@/data/educations.json";
import rawExperiences from "@/data/experiences.json";
import rawProjects from "@/data/projects.json";
import rawSkillsAndInterests from "@/data/skills-and-interests.json";
import Title from "../-components/Title";
import { CVAchievements } from "./-components/CVAchievements";
import { CVEducation } from "./-components/CVEducation";
import { CVExperience } from "./-components/CVExperience";
import { CVLinks } from "./-components/CVLinks";
import { CVProjects } from "./-components/CVProjects";
import { CVSkillsAndInterests } from "./-components/CVSkillsAndInterests";
import CVStatement from "./-components/CVStatement";
import type {
	Achievement,
	Education,
	Experience,
	Project,
	SkillOrInterest,
} from "./-components/types";

export const Route = createFileRoute("/cv/")({
	component: CV,
});

function CV() {
	return (
		<section className="mx-2 flex min-h-screen flex-col justify-start gap-2 bg-white p-4 px-8 xl:mx-60 2xl:mx-80">
			<header className="flex w-full flex-col items-center gap-2 md:text-center">
				<Title />
				<CVLinks />
			</header>

			<Separator />

			<CVStatement />

			<CVEducation educations={rawEducations as Education[]} />

			<CVExperience experiences={rawExperiences as Experience[]} />

			<CVProjects projects={rawProjects as Project[]} />

			<CVAchievements achievements={rawAchievements as Achievement[]} />

			<CVSkillsAndInterests
				skillsAndInterests={rawSkillsAndInterests as SkillOrInterest[]}
			/>
		</section>
	);
}
