import { Link } from "@tanstack/react-router";

export default function Header() {
	// TODO: refactor using Shadcn Navigation Menu
	return (
		<header className="flex w-full justify-between gap-2 bg-white p-2 text-black">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/">Home</Link>
				</div>
			</nav>
		</header>
	);
}
