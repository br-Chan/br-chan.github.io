"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with a label";

const chartData = [
	{ keyboardLayout: "WORKMAN", wpm: 0, fill: "var(--chart-4)" },
	{ keyboardLayout: "COLEMAK", wpm: 31, fill: "var(--chart-3)" },
	{ keyboardLayout: "DVORAK", wpm: 90, fill: "var(--chart-2)" },
	{ keyboardLayout: "QWERTY", wpm: 119, fill: "var(--chart-1)" },
];

const chartConfig = {
	wpm: {
		label: "WPM",
	},
	qwerty: {
		label: "QWERTY",
		color: "var(--chart-1)",
	},
	dvorak: {
		label: "DVORAK",
		color: "var(--chart-2)",
	},
	colemak: {
		label: "COLEMAK",
		color: "var(--chart-3)",
	},
	workman: {
		label: "WORKMAN",
		color: "var(--chart-4)",
	},
} satisfies ChartConfig;

export const TypingCharts = () => {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Keyboard Layouts</CardTitle>
				<CardDescription>
					After mastering QWERTY, I set my sights on the other
					keyboard layouts...
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					className="mx-auto aspect-square max-h-[300px]"
					config={chartConfig}
				>
					<RadialBarChart
						data={chartData}
						endAngle={0}
						innerRadius={30}
						outerRadius={160}
						startAngle={180}
					>
						<ChartTooltip
							content={
								<ChartTooltipContent
									hideLabel
									nameKey="keyboardLayout"
								/>
							}
							cursor={false}
						/>
						<RadialBar background dataKey="wpm">
							<LabelList
								className="fill-black font-bold capitalize mix-blend-luminosity"
								dataKey="keyboardLayout"
								fontSize={11}
								position="insideStart"
							/>
						</RadialBar>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				I'm a footer
			</CardFooter>
		</Card>
	);
};
