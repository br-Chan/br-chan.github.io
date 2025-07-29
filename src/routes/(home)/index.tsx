import { createFileRoute } from "@tanstack/react-router";
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
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import rawProjects from "@/data/projects.json";
import type { Project } from "../cv/-components/types";
import { Projects } from "./-components/Projects";
import { TypingChart } from "./-components/TypingChart";

export const Route = createFileRoute("/(home)/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen w-full flex-col justify-start gap-8 bg-white py-8 *:z-1 md:px-8 lg:px-16 xl:px-32">
			<div className="flex flex-col gap-2 px-4">
				{/* <header className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
					<Title />
					<SocialLinks />
				</header>
				<Separator /> */}
				<p>
					I love&nbsp;
					<span className="font-bold text-amber-500">creating</span>
					,&nbsp;
					<span className="font-bold text-blue-500">learning</span>
					&nbsp;and&nbsp;
					<span className="font-bold text-red-500">doing</span>
					&nbsp;things - usually all 3 at once.
				</p>
			</div>

			<Accordion type="multiple">
				<AccordionItem
					className="border-0 bg-amber-300/30 md:rounded-t-2xl"
					value="creating"
				>
					<AccordionTrigger
						className="bg-amber-300/30 hover:bg-amber-300/20 md:rounded-t-2xl"
						startIcon={FaPenToSquare}
					>
						CREATING
					</AccordionTrigger>

					<AccordionContent>
						<SubSection
							className="bg-amber-300/30"
							title="Projects"
						>
							<Projects
								projects={rawProjects as Project[]}
								projectType="project"
							/>
						</SubSection>
						<SubSection
							className="bg-amber-300/30"
							title="Competitions"
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
					value="learning"
				>
					<AccordionTrigger
						className="bg-blue-400/30 hover:bg-blue-400/20"
						startIcon={FaBook}
					>
						LEARNING
					</AccordionTrigger>
					<AccordionContent>
						<SubSection
							className="bg-blue-400/30"
							title="Languages and Tools"
						>
							<Card>
								<CardContent>Under construction...</CardContent>
							</Card>
						</SubSection>

						<SubSection
							className="bg-blue-400/30"
							title="University Courses"
						>
							<Card>
								<CardContent>
									<p>
										• ENGGEN 303 | Innovation and Business
										Cases
									</p>
									<p>
										• SOFTENG 351 | Fundamentals of Database
										Systems
									</p>
									<p>• SOFTENG 370 | Operating Systems</p>
									<p>
										• SOFTENG 373 |Computer Graphics and
										Image Processing
									</p>
								</CardContent>
							</Card>
						</SubSection>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className="border-0 bg-red-400/30 md:rounded-b-2xl"
					value="doing"
				>
					<AccordionTrigger
						className="bg-red-400/30 hover:bg-red-400/20 md:rounded-b-2xl"
						startIcon={FaKeyboard}
					>
						DOING
					</AccordionTrigger>
					<AccordionContent>
						<SubSection className="bg-red-400/30" title="WDCC">
							<Card>
								<CardContent>
									<p>
										I'm a software developer in a software
										project at the Web Development and
										Consulting Club! Come check out what
										we're up to.
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

						<SubSection className="bg-red-400/30" title="Typing">
							<Card>
								<CardContent className="flex flex-col gap-2">
									<TypingChart />
									<p>
										I was a hunt-and-pecker until 2017, when
										I started learning touch typing. Over
										the next 3 years of practice, my typing
										speed grew to about 100 WPM (words per
										minute) and I set my sights on the other
										keyboard layouts. I began learning
										Dvorak in 2020 and Colemak in 2025.
									</p>
								</CardContent>
								<CardFooter>
									<span className="flex gap-2">
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
