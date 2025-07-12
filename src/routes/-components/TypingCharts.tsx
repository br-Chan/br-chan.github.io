"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
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
	{ keyboardLayout: "QWERTY", wpm: 119, fill: "var(--chart-1)" },
	{ keyboardLayout: "DVORAK", wpm: 90, fill: "var(--chart-2)" },
	{ keyboardLayout: "COLEMAK", wpm: 31, fill: "var(--chart-3)" },
	{ keyboardLayout: "WORKMAN", wpm: 0, fill: "var(--chart-4)" },
];

const chartConfig = {
	wpm: {
		label: "WPM",
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
			<CardContent>
				<ChartContainer className="max-h-[200px]" config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							left: 20,
						}}
					>
						<XAxis dataKey="wpm" hide type="number" />
						<YAxis
							dataKey="keyboardLayout"
							tickLine={false}
							tickMargin={10}
							type="category"
						/>
						<ChartTooltip
							content={<ChartTooltipContent hideLabel />}
							cursor={false}
						/>
						<Bar dataKey="wpm" fill="var(--color-wpm)" radius={5} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
