import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { FaCar, FaGithub } from "react-icons/fa";
import { FaBook, FaKeyboard, FaPenToSquare } from "react-icons/fa6";
import { PiCowFill } from "react-icons/pi";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/animate-ui/radix/accordion";
import { BadgeLink } from "@/components/BadgeLink";
import { SubSection } from "@/components/SubSection";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useStarContext } from "@/context/StarContext";
import rawProjects from "@/data/projects.json";
import type { Project } from "../cv/-components/types";
import { Projects } from "./-components/Projects";
import { TypingChart } from "./-components/TypingChart";

export const Route = createFileRoute("/(home)/")({
	component: App,
});

function App() {
	const { setStarColor } = useStarContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run upon first render only
	useEffect(() => {
		setStarColor("#f59e0b");
	}, []);

	return (
		<section className="flex min-h-screen w-full flex-col justify-start gap-8 bg-white py-8 *:z-1 md:px-8 lg:px-16 xl:px-32">
			<h1 className="font-bold text-2xl">
				NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN, NEVER GONNA
				RUN AROUND AND DESERT YOU
			</h1>
			<img alt="rickroll" src="/rickroll.png" />
			<h2>YOU JUST LOST THE GAME</h2>

			<div className="flex w-fit flex-col gap-2 rounded-md border-2 bg-white px-4 py-2">
				<p className="mt-1 text-black text-lg dark:text-slate-100">
					I love{" "}
					<span className="font-bold text-amber-500">creating</span>
					{", "}
					<span className="font-bold text-blue-500">learning</span>
					{" and "}
					<span className="font-bold text-red-500">doing</span> things
					- usually all 3 at once.
				</p>
			</div>

			<Accordion type="multiple">
				<AccordionItem
					className="border-0 bg-amber-300/30 md:rounded-t-2xl"
					onClick={() => setStarColor("#f59e0b")}
					// onMouseOver={() => setStarColor("#f59e0b")} // amber 500
					value="creating"
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
					onClick={() => setStarColor("#3b82f6")}
					// onMouseOver={() => setStarColor("#3b82f6")} // blue 500
					value="learning"
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
								<CardContent>
									Coming soon! At least, before the heat death
									of the universe. ~ 2/11/25
								</CardContent>
							</Card>
						</SubSection>

						<SubSection
							className="bg-blue-500"
							title="University Courses"
							titleOutlineColor="#0448b0"
						>
							<Card>
								<CardContent>
									<p>• COMPSCI 316 | Cyber Security</p>
									<p>
										• SOFTENG 306 | Software Engineering
										Design 2
									</p>
									<p>• SOFTENG 325 | Software Architecture</p>
									<p>• SOFTENG 364 | Networks and Security</p>
								</CardContent>
							</Card>
						</SubSection>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className="border-0 bg-red-400/30 md:rounded-b-2xl"
					onClick={() => setStarColor("#ef4444")}
					// onMouseOver={() => setStarColor("#ef4444")} // red 500
					value="doing"
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
							<Card>
								<CardHeader>
									<CardTitle className="font-bold text-lg">
										WDCC
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										I'm a software developer in a software
										project at the Web Development and
										Consulting Club! We're developing a
										member management and court booking
										portal for the University of Auckland
										Badminton Club. I'm working full-stack,
										creating components for the frontend and
										working on backend services and
										endpoints, among other awesome stuff and
										a tiny bit of DevOps (which is
										particularly not awesome when things
										don't work) Come check out what we're up
										to.
									</p>
								</CardContent>
								<CardFooter>
									<span className="flex gap-2">
										<BadgeLink
											className="bg-[#3a86fe]"
											href="https://wdcc.co.nz/"
											label="WDCC"
											startIcon={<PiCowFill />}
											target="_blank"
										/>
										<BadgeLink
											href="https://github.com/UoaWDCC/uabc-web"
											label="uabc-web"
											startIcon={<FaGithub />}
											target="_blank"
										/>
									</span>
								</CardFooter>
							</Card>
						</SubSection>

						<SubSection
							className="bg-red-500"
							title="Hobbies"
							titleOutlineColor="#ad0c14"
						>
							<Card>
								<CardHeader>
									<CardTitle className="font-bold text-lg">
										Typing
									</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col gap-2">
									<p>
										I was a hunt-and-pecker until 2017, when
										I started learning touch typing. Over
										the next 3 years of practice, my typing
										speed grew to about 100 WPM (words per
										minute) and I set my sights on the other
										keyboard layouts. I began learning
										Dvorak in 2020 and Colemak in 2025.
									</p>
									<p>
										My personal record for 30 sec is 143 WPM
										(English 1k), but my current
										long-running goal is to master as many
										keyboard layouts as possible. This is
										harder than it sounds - it's like when
										you switch from JavaScript to Java and
										forget to add semicolons all the time,
										but 30 times worse.
									</p>
									<TypingChart />
								</CardContent>
								<CardFooter>
									<span className="flex flex-wrap gap-2">
										<BadgeLink
											className="bg-[#19191c] text-[#e2b714]"
											href="https://monkeytype.com/profile/DvorakTurkey"
											label="Monkeytype profile"
											startIcon={<FaKeyboard />}
											target="_blank"
										/>
										<BadgeLink
											className="bg-[#d52f3a]"
											href="https://www.nitrotype.com/racer/allors4612"
											label="Nitro Type profile"
											startIcon={<FaCar />}
											target="_blank"
										/>
									</span>
								</CardFooter>
							</Card>
						</SubSection>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
