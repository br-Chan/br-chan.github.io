import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		// Add dark to className to test dark mode
		<main className="flex min-h-screen flex-col items-center bg-white font-mono dark:bg-black">
			<StarsBackground className="fixed inset-0 z-0 flex items-center justify-center" />

			<Header />

			<div className="mt-[153.6px] flex min-h-screen w-full flex-col items-center md:mt-[105.6px]">
				{/* <Header /> */}
				<Outlet />
			</div>

			{/* TODO: Create way better footer */}
			<span className="z-100 m-4 w-fit rounded-md border-2 bg-white p-2 text-center text-muted-foreground dark:bg-[#400050]">
				made by{" "}
				<Link className="hover:underline" to="/">
					br-Chan
				</Link>
			</span>

			<TanStackRouterDevtools />
		</main>
	),
});
