import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<div className="bg-gray-800 flex gap-2 items-center flex-col">
			<Header />

			<Outlet />
			<TanStackRouterDevtools />
		</div>
	),
});
