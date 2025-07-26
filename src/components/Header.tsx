import { Link } from "@tanstack/react-router";
import { Title } from "@/routes/-components/Title";
import { SocialLinks } from "@/routes/(home)/-components/SocialLinks";

export default function Header() {
	return (
		<header className="fixed z-100 flex w-full flex-col items-center justify-between gap-2 border-x-2 border-b-2 bg-white p-2 px-4 text-black md:flex-row md:px-8">
			<div className="flex w-full items-center gap-2 md:w-fit">
				{/* <img alt="logo" className="size-15" src={logo} /> */}
				<Title />
			</div>

			<nav className="flex w-full items-center justify-between">
				{/* TODO: refactor using Shadcn Navigation Menu */}
				<div className="flex flex-row items-center gap-4 font-bold">
					<Link to="/">Home</Link>
					<Link to="/cv">CV</Link>
				</div>
				<SocialLinks />
			</nav>
		</header>
	);
}
