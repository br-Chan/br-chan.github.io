"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
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

export const TypingChart = () => {
	return (
		<ChartContainer className="max-h-[200px] w-full" config={chartConfig}>
			<BarChart
				accessibilityLayer
				data={chartData}
				layout="vertical"
				margin={{
					left: 20,
					right: 30,
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
				<Bar
					dataKey="wpm"
					fill="var(--color-wpm)"
					radius={[0, 100, 100, 0]}
				>
					<LabelList
						className="fill-foreground"
						dataKey="wpm"
						fontSize={12}
						offset={8}
						position="right"
					/>
				</Bar>
			</BarChart>
		</ChartContainer>
	);
};
