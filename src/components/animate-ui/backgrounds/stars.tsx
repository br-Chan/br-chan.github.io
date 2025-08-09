"use client";

import {
	type HTMLMotionProps,
	motion,
	type SpringOptions,
	type Transition,
	useMotionValue,
	useSpring,
} from "motion/react";
import * as React from "react";
import { useStarContext } from "@/context/starContext";
import { cn } from "@/lib/utils";

type StarLayerProps = HTMLMotionProps<"div"> & {
	count: number;
	size: number;
	transition: Transition;
	starColor: string;
};

function StarLayer({
	count = 1000,
	size = 1,
	transition = { repeat: Infinity, duration: 50, ease: "linear" },
	starColor = "#fff",
	className,
	...props
}: StarLayerProps) {
	const [starPositions, setStarPositions] = React.useState<string[]>([]);

	React.useEffect(() => {
		const positions: string[] = [];
		for (let i = 0; i < count; i++) {
			const x = Math.floor(Math.random() * 4000) - 2000;
			const y = Math.floor(Math.random() * 4000) - 2000;
			positions.push(`${x}px ${y}px`);
		}
		setStarPositions(positions);
	}, [count]);

	const boxShadow = React.useMemo(() => {
		return starPositions
			.map((position) => `${position} ${starColor}`)
			.join(", ");
	}, [starPositions, starColor]);

	return (
		<motion.div
			animate={{ y: [0, -2000] }}
			className={cn("absolute top-0 left-0 h-[2000px] w-full", className)}
			data-slot="star-layer"
			transition={transition}
			{...props}
		>
			<div
				className="absolute rounded-full bg-transparent transition-all duration-75"
				style={{
					width: `${size}px`,
					height: `${size}px`,
					boxShadow: boxShadow,
				}}
			/>
			<div
				className="absolute top-[2000px] rounded-full bg-transparent transition-all duration-150"
				style={{
					width: `${size}px`,
					height: `${size}px`,
					boxShadow: boxShadow,
				}}
			/>
		</motion.div>
	);
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
	factor?: number;
	speed?: number;
	transition?: SpringOptions;
	starColor?: string;
	pointerEvents?: boolean;
};

function StarsBackground({
	children,
	className,
	factor = 0.05,
	speed = 50,
	transition = { stiffness: 50, damping: 20 },
	// starColor = "#fff",
	pointerEvents = true,
	...props
}: StarsBackgroundProps) {
	const { starColor } = useStarContext();

	const offsetX = useMotionValue(1);
	const offsetY = useMotionValue(1);

	const springX = useSpring(offsetX, transition);
	const springY = useSpring(offsetY, transition);

	const handleMouseMove = React.useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight / 2;
			const newOffsetX = -(e.clientX - centerX) * factor;
			const newOffsetY = -(e.clientY - centerY) * factor;
			offsetX.set(newOffsetX);
			offsetY.set(newOffsetY);
		},
		[offsetX, offsetY, factor],
	);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: Animate UI decided to do this I guess
		<div
			className={cn(
				"relative size-full overflow-hidden",
				//bg-[radial-gradient(ellipse_at_bottom,_#d9d9d9_0%,_#fff_100%)]
				//bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]
				className,
			)}
			data-slot="stars-background"
			onMouseMove={handleMouseMove}
			{...props}
		>
			<motion.div
				className={cn({ "pointer-events-none": !pointerEvents })}
				style={{ x: springX, y: springY }}
			>
				<StarLayer
					count={1000}
					size={3}
					starColor={starColor}
					transition={{
						repeat: Infinity,
						duration: speed,
						ease: "linear",
					}}
				/>
				<StarLayer
					count={400}
					size={2}
					starColor={starColor}
					transition={{
						repeat: Infinity,
						duration: speed * 2,
						ease: "linear",
					}}
				/>
				<StarLayer
					count={200}
					size={3}
					starColor={starColor}
					transition={{
						repeat: Infinity,
						duration: speed * 3,
						ease: "linear",
					}}
				/>
			</motion.div>
			{children}
		</div>
	);
}

export {
	StarLayer,
	StarsBackground,
	type StarLayerProps,
	type StarsBackgroundProps,
};
