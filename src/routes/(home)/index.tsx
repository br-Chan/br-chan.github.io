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
import { Separator } from "@/components/ui/separator";
import rawProjects from "@/data/projects.json";
import Title from "../-components/Title";
import type { Project } from "../cv/-components/types";
import { Projects } from "./-components/Projects";
import { TypingChart } from "./-components/TypingChart";

export const Route = createFileRoute("/(home)/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen w-full flex-col justify-start gap-2 bg-white p-4 px-8 md:w-3xl lg:w-4xl xl:w-5xl">
			<Title />
			<Separator />
			<p>
				I love&nbsp;
				<span className="font-bold text-amber-500">creating</span>
				,&nbsp;
				<span className="font-bold text-blue-500">learning</span>
				&nbsp;and&nbsp;
				<span className="font-bold text-red-500">doing</span>
				&nbsp;things - usually all 3 at once.
			</p>

			<Accordion
				defaultValue={["creating", "learning", "doing"]}
				type="multiple"
			>
				<AccordionItem
					className="rounded-t-2xl bg-amber-300/30"
					value="creating"
				>
					<AccordionTrigger
						className="rounded-t-2xl hover:bg-amber-300/30"
						startIcon={FaPenToSquare}
					>
						CREATING
					</AccordionTrigger>

					<AccordionContent className="px-8 py-4">
						<section className="flex flex-col gap-4 rounded-lg bg-amber-300/30 p-4">
							<h3 className="font-bold text-2xl">Projects</h3>
							<Projects projects={rawProjects as Project[]} />
						</section>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className="bg-blue-400/30" value="learning">
					<AccordionTrigger
						className="hover:bg-blue-400/30"
						startIcon={FaBook}
					>
						<span className="flex items-center gap-4">
							LEARNING
						</span>
					</AccordionTrigger>
					<AccordionContent className="p-4">
						<Accordion className="w-full" type="multiple">
							<AccordionItem value="item-1">
								<AccordionTrigger>
									Languages and Tools
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4 text-balance">
									A table here that shows all techs I know.
									Columns: category. Rows: the techs.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									Current University Courses
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4 text-balance">
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
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className="rounded-b-2xl bg-red-400/30"
					value="doing"
				>
					<AccordionTrigger
						className="rounded-b-2xl hover:bg-red-400/30"
						startIcon={FaKeyboard}
					>
						<span className="flex items-center gap-4">DOING</span>
					</AccordionTrigger>
					<AccordionContent className="p-4">
						<section className="flex flex-col gap-2">
							<h3 className="font-bold text-xl">WDCC:</h3>
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
							<p>
								I'm a software developer in a software project
								at the Web Development and Consulting Club! Come
								check out what we're up to.
							</p>
						</section>
						<section className="flex flex-col gap-2">
							<h3 className="font-bold text-xl">Hackathons:</h3>
							TODO: WDCC x SESA Hackathon 2024, KiwiJam 2024
						</section>
						<section className="flex flex-col gap-2">
							<h3 className="font-bold text-xl">Typing:</h3>
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
							<p>
								I was a hunt-and-pecker until 2017, when I
								started learning touch typing. Over the next 3
								years of practice, my typing speed grew to about
								100 WPM (words per minute) and I set my sights
								on the other keyboard layouts. I began learning
								Dvorak in 2020 and Colemak in 2025.
							</p>
							<TypingChart />
						</section>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
