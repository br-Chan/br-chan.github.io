import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<main className="flex min-h-screen flex-col items-center gap-8 bg-white">
			<Header />

			<div className="mt-[105.6px] flex w-full flex-col items-center">
				{/* <Header /> */}
				<Outlet />
			</div>

			{/* TODO: Create way better footer */}
			<p className="w-full border-t-2 py-4 text-center text-muted-foreground">
				made by br-Chan
			</p>

			<TanStackRouterDevtools />
		</main>
	),
});
