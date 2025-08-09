import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<main className="flex min-h-screen flex-col items-center bg-white">
			<StarsBackground className="fixed inset-0 z-0 flex items-center justify-center rounded-xl" />

			<Header />

			<div className="mt-[153.6px] flex min-h-screen w-full flex-col items-center md:mt-[105.6px]">
				{/* <Header /> */}
				<Outlet />
			</div>

			{/* TODO: Create way better footer */}
			<p className="z-100 w-full border-t-2 bg-white py-4 text-center text-muted-foreground">
				made by br-Chan
			</p>

			<TanStackRouterDevtools />
		</main>
	),
});
