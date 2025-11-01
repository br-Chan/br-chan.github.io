import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Title } from "@/routes/-components/Title";
import { SocialLinks } from "@/routes/(home)/-components/SocialLinks";

export default function Header() {
	return (
		<header className="fixed z-100 flex w-full flex-col items-center justify-between gap-2 border-b-2 bg-white p-2 px-4 text-black md:flex-row md:px-8 dark:bg-fuchsia-900 dark:text-slate-100">
			<div className="flex w-full items-center gap-2 md:w-fit">
				{/* <img alt="logo" className="size-15" src={logo} /> */}
				<Title />
			</div>

			<nav className="flex w-full items-center justify-between">
				{/* TODO: refactor using Shadcn Navigation Menu */}
				{/* TODO: extract motion logic to its own component */}
				<div className="flex flex-row items-center gap-4 font-bold text-xl">
					<motion.span
						transition={{
							type: "tween",
							duration: 0.1,
						}}
						whileHover={{
							y: -2,
						}}
					>
						<Link className="hover:underline" to="/">
							Home
						</Link>
					</motion.span>
					<motion.span
						transition={{
							type: "tween",
							duration: 0.1,
						}}
						whileHover={{
							y: -2,
						}}
					>
						<Link className="hover:underline" to="/cv">
							CV
						</Link>
					</motion.span>
					<motion.span
						transition={{
							type: "tween",
							duration: 0.1,
						}}
						whileHover={{
							y: -2,
						}}
					>
						<Link className="hover:underline" to="/todo">
							Todo
						</Link>
					</motion.span>
				</div>
				<SocialLinks />
			</nav>
		</header>
	);
}
