import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SubSection } from "@/components/SubSection";
import { TextBox } from "@/components/TextBox";
import { useStarContext } from "@/context/StarContext";
import rawLofiPacks from "@/data/lofi-packs.json";
import { LofiPacks } from "./-components/LofiPacks";
import type { LofiPack } from "./-components/types";

export const Route = createFileRoute("/music/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { setStarColor } = useStarContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run upon first render only
	useEffect(() => {
		setStarColor("#B05FBC");
	}, []);

	return (
		<section className="flex min-h-screen w-full flex-col justify-start gap-8 bg-white py-8 *:z-1 md:px-8 lg:px-16 xl:px-32">
			<TextBox>
				In a long forgotten age I used to play the piano. These days, I
				listen to way too much lofi and try to make my own music.
			</TextBox>
			<div>
				<SubSection
					className="border-[#B05FBC] bg-[#f1b2fb]"
					title="Lofi Packs"
					titleOutlineColor="#9852a3"
				>
					<LofiPacks lofiPacks={rawLofiPacks as LofiPack[]} />
				</SubSection>
			</div>
		</section>
	);
}
