import { createFileRoute } from "@tanstack/react-router";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<section className="flex min-h-screen w-6xl flex-col justify-start gap-2 bg-white p-4 px-8">
			<header>
				<span className="font-extrabold">Hi, I'm</span>
				<h1 className="font-extrabold text-4xl">Brandon Chan</h1>
				<span className="text-muted-foreground text-sm">
					Penultimate Software Engineering Student at the University
					of Auckland
				</span>
			</header>

			<Separator />

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
