import { createFileRoute } from "@tanstack/react-router";
import { FaCar, FaGithub, FaKeyboard } from "react-icons/fa";
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
		<section className="flex min-h-screen flex-col justify-start gap-2 bg-white p-4 px-8 xl:mx-64">
			<Title />
			<Separator />
			<span>
				I love Learning, Creating and Doing things - usually all 3 at
				once.
			</span>
			{/* TODO: idea: the LCD are small labels in the top left, with a light
			coloured background for each section. The Accordion labels become proper headings */}

			<Accordion
				defaultValue={["creating", "learning", "doing"]}
				type="multiple"
			>
				<AccordionItem
					className="rounded-t-2xl bg-amber-300/30"
					value="creating"
				>
					<AccordionTrigger className="rounded-t-2xl p-8">
						CREATING
					</AccordionTrigger>
					<AccordionContent className="p-4">
						<Accordion
							className="w-full"
							defaultValue={["item-1"]}
							type="multiple"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger>Projects</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4 text-balance">
									Link to /projects should be here List of
									projects!
									<Projects
										projects={rawProjects as Project[]}
									/>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger>
									Plans & Ideas
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4 text-balance">
									Random plans and ideas that would totally
									make sense having in a static website that
									requires accessing and committing to a
									repository to update.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className="bg-blue-400/30" value="learning">
					<AccordionTrigger className="p-8">
						LEARNING
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
					<AccordionTrigger className="rounded-b-2xl p-8">
						DOING
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

			<section className="rounded-2xl bg-amber-300/30 p-4">
				<h2 className="font-semibold">CREATING</h2>

				<Accordion
					className="w-full"
					defaultValue={["item-1"]}
					type="multiple"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger>Projects</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							Link to /projects should be here List of projects!
							<Projects projects={rawProjects as Project[]} />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>Plans & Ideas</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							Random plans and ideas that would totally make sense
							having in a static website that requires accessing
							and committing to a repository to update.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>

			<section>
				<h2 className="font-bold text-2xl underline">LEARNING</h2>

				<Accordion className="w-full" type="multiple">
					<AccordionItem value="item-1">
						<AccordionTrigger>Languages and Tools</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							A table here that shows all techs I know. Columns:
							category. Rows: the techs.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							Current University Courses
						</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>• ENGGEN 303 | Innovation and Business Cases</p>
							<p>
								• SOFTENG 351 | Fundamentals of Database Systems
							</p>
							<p>• SOFTENG 370 | Operating Systems</p>
							<p>
								• SOFTENG 373 |Computer Graphics and Image
								Processing
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="font-bold text-2xl underline">DOING</h2>

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
						I'm a software developer in a software project at the
						Web Development and Consulting Club! Come check out what
						we're up to.
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
						I was a hunt-and-pecker until 2017, when I started
						learning touch typing. Over the next 3 years of
						practice, my typing speed grew to about 100 WPM (words
						per minute) and I set my sights on the other keyboard
						layouts. I began learning Dvorak in 2020 and Colemak in
						2025.
					</p>
					<TypingChart />
				</section>
			</section>
		</section>
	);
}
