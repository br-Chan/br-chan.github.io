import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<main className="flex min-h-screen flex-col items-center gap-6 bg-gray-800">
			<Header />

			<div className="container flex flex-col items-center pb-48">
				<Outlet />
			</div>

			<TanStackRouterDevtools />
		</main>
	),
});
