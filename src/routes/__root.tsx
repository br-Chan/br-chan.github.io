import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<main className="flex flex-col items-center gap-6 bg-gray-800">
			<Header />

			<Outlet />
			<TanStackRouterDevtools />
		</main>
	),
});
