import { motion } from "motion/react";

export const GreetingCard = () => {
	return (
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
				<span className="font-extrabold text-3xl text-white">a...</span>
				<span className="rounded-md bg-white text-sm">
					Penultimate Software Engineering Student at the University
					of Auckland
				</span>
			</div>
		</motion.header>
	);
};
