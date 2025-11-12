import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { FaBook, FaKeyboard, FaPenToSquare } from "react-icons/fa6";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/animate-ui/radix/accordion";
import { SubSection } from "@/components/SubSection";
import { Card, CardContent } from "@/components/ui/card";
import { useStarContext } from "@/context/StarContext";
import rawCourses from "@/data/courses.json";
import rawProjects from "@/data/projects.json";
import type { CourseCategory, Project } from "../cv/-components/types";
import { Courses } from "./-components/Courses";
import { Hobbies } from "./-components/Hobbies";
import { Projects } from "./-components/Projects";
import { VolunteerWork } from "./-components/VolunteerWork";

export const Route = createFileRoute("/(home)/")({
	component: App,
});

function App() {
	const { setStarColor } = useStarContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run upon first render only
	useEffect(() => {
		setStarColor("#f59e0b");
	}, []);

	const onAccordionValueChange = (newOpenedItems: string[]) => {
		const color = newOpenedItems[newOpenedItems.length - 1];
		color && setStarColor(color);
	};

	return (
		<section className="flex min-h-screen w-full flex-col justify-start gap-8 bg-white py-8 *:z-1 md:px-8 lg:px-16 xl:px-32">
			{/* <h1 className="font-bold text-2xl">
				NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN, NEVER GONNA
				RUN AROUND AND DESERT YOU
			</h1>
			<img alt="rickroll" src="/rickroll.png" />
			<h2>YOU JUST LOST THE GAME</h2> */}

			<div className="my-2 flex w-full flex-col gap-2 border-y-2 bg-white px-4 py-2 md:rounded-md md:border-2">
				<p className="mt-1 text-black text-lg dark:text-slate-100">
					I love{" "}
					<span className="font-bold text-amber-500">creating</span>
					{", "}
					<span className="font-bold text-blue-500">learning</span>
					{" and "}
					<span className="font-bold text-red-500">doing</span> things
					(usually all 3 at once!).
				</p>
			</div>

			<Accordion onValueChange={onAccordionValueChange} type="multiple">
				<AccordionItem
					className="border-0 bg-amber-300/30 md:rounded-t-2xl"
					value="#f59e0b" // amber 500
				>
					<AccordionTrigger
						className="bg-amber-400 font-sans hover:opacity-90 md:rounded-t-2xl"
						startIcon={FaPenToSquare}
						style={{
							WebkitTextStroke: "6px",
							WebkitTextStrokeColor: "#ad7e00",
							paintOrder: "stroke fill",
						}}
					>
						Creating
					</AccordionTrigger>

					<AccordionContent>
						<SubSection
							className="bg-amber-400"
							title="Projects"
							titleOutlineColor="#ad7e00"
						>
							<Projects
								projects={rawProjects as Project[]}
								projectType="project"
							/>
						</SubSection>
						<SubSection
							className="bg-amber-400"
							title="Competitions"
							titleOutlineColor="#ad7e00"
						>
							<Projects
								projects={rawProjects as Project[]}
								projectType="competition"
							/>
						</SubSection>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className="border-0 bg-blue-400/30"
					value="#3b82f6" // blue 500
				>
					<AccordionTrigger
						className="bg-blue-500 font-sans hover:opacity-90"
						color="blue"
						startIcon={FaBook}
						style={{
							WebkitTextStroke: "6px",
							WebkitTextStrokeColor: "#0448b0",
							paintOrder: "stroke fill",
						}}
					>
						Learning
					</AccordionTrigger>
					<AccordionContent>
						<SubSection
							className="bg-blue-500"
							title="Languages and Tools"
							titleOutlineColor="#0448b0"
						>
							<Card>
								<CardContent className="text-lg">
									Coming soon! ~ 11/11/25
								</CardContent>
							</Card>
						</SubSection>

						<SubSection
							className="bg-blue-500"
							title="University Courses"
							titleOutlineColor="#0448b0"
						>
							<span className="rounded-md bg-white p-2 font-normal-sans">
								Just a few of the courses that I've taken in my
								Bachelor of Engineering (Honours) degree
								specialising in Software Engineering.
							</span>
							<Courses
								courseCategories={
									rawCourses as CourseCategory[]
								}
							/>
						</SubSection>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className="border-0 bg-red-400/30 md:rounded-b-2xl"
					value="#ef4444" // red 500
				>
					<AccordionTrigger
						className="bg-red-500 font-sans hover:opacity-90 md:rounded-b-2xl"
						startIcon={FaKeyboard}
						style={{
							WebkitTextStroke: "6px",
							WebkitTextStrokeColor: "#ad0c14",
							paintOrder: "stroke fill",
						}}
					>
						Doing
					</AccordionTrigger>
					<AccordionContent>
						<SubSection
							className="bg-red-500"
							title="Volunteer Work"
							titleOutlineColor="#ad0c14"
						>
							<VolunteerWork />
						</SubSection>

						<SubSection
							className="bg-red-500"
							title="Hobbies and Interests"
							titleOutlineColor="#ad0c14"
						>
							<Hobbies />
						</SubSection>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
