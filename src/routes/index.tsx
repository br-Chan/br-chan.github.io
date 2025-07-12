import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/animate-ui/radix/accordion";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen flex-col justify-start gap-2 bg-white p-4 px-8 xl:mx-52">
			<motion.header
				className=" flex h-60 w-sm flex-col gap-2 rounded-4xl bg-red-600 p-4 text-center"
				transition={{ type: "spring", stiffness: 150, damping: 1 }}
				whileTap={{ rotate: 5 }}
			>
				<span className="font-extrabold text-4xl text-white">
					Hello, I'm...
				</span>
				<h1 className="flex flex-1 items-center justify-center rounded-md bg-white font-extrabold text-4xl">
					Brandon Chan
				</h1>
				<div className="flex gap-2">
					<span className="font-extrabold text-3xl text-white">
						a...
					</span>
					<span className="rounded-md bg-white text-sm">
						Penultimate Software Engineering Student at the
						University of Auckland
					</span>
				</div>
				{/* <span className="text-muted-foreground text-sm"></span> */}
			</motion.header>
			<span>
				I love Learning, Creating and Doing things - usually all 3 at
				once.
			</span>
			<section>
				<h2 className="font-bold text-2xl underline">Learning</h2>

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
							<p>
								• SOFTENG 370 | Operating Systems SOFTENG 373 |
							</p>
							<p>• Computer Graphics and Image Processing</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</section>
	);
}
