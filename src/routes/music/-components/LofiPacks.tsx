import { type FC, memo } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { LofiPack } from "./types";

export interface LofiPacksProps {
	lofiPacks: LofiPack[];
}

export const LofiPacks: FC<LofiPacksProps> = memo(({ lofiPacks }) => {
	return (
		<div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
			{lofiPacks.map((lofiPack) => {
				return (
					<Card key={lofiPack.href}>
						<CardHeader>
							<CardTitle className="flex flex-col justify-between font-bold text-lg md:flex-row md:gap-4">
								{lofiPack.title}
							</CardTitle>
							<CardDescription>
								{lofiPack.description}
							</CardDescription>
						</CardHeader>
						<CardContent className="h-full">{""}</CardContent>
						<CardFooter>
							<iframe
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								className="aspect-video w-full"
								data-testid="embed-iframe"
								height="352"
								src={lofiPack.href}
								title={lofiPack.title}
								width="100%"
							></iframe>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
});
