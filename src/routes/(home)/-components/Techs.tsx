import {
	BiLogoCPlusPlus,
	BiLogoJavascript,
	BiLogoTypescript,
} from "react-icons/bi";
import { GiCargoCrane, GiCrane } from "react-icons/gi";
import { RiJavaLine, RiNextjsFill } from "react-icons/ri";
import { BadgeLink } from "@/components/BadgeLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiCrane, PiCraneTowerBold } from "react-icons/pi";

export const Techs = () => {
	return (
		<div className="grid gap-4 lg:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Languages
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-full flex-wrap gap-2 whitespace-pre-line text-lg">
					<BadgeLink
						className="bg-[#f89820] text-md"
						endIcon={null}
						href=""
						label="Java"
						startIcon={<RiJavaLine />}
					/>
					<BadgeLink
						className="bg-[#323330] text-[#F0DB4F] text-md"
						endIcon={null}
						href=""
						label="JavaScript"
						startIcon={<BiLogoJavascript />}
					/>
					<BadgeLink
						// biome-ignore lint/nursery/useSortedClasses: can't make border blue otherwise
						className="border-opaque border-blue-400 bg-white text-[#3178c6] text-md "
						endIcon={null}
						href=""
						label="TypeScript"
						startIcon={<BiLogoTypescript />}
					/>
					<BadgeLink
						// biome-ignore lint/nursery/useSortedClasses: can't make border blue otherwise
						className="border-opaque border-blue-400 bg-white text-[#659AD2] text-md"
						endIcon={null}
						href=""
						label="C / C++"
						startIcon={<BiLogoCPlusPlus />}
					/>
					<PiCraneTowerBold className="text-3xl" />
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Web Frameworks and Libraries
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-full flex-wrap gap-2 whitespace-pre-line text-lg">
					React
					<BadgeLink
						className="text-md"
						endIcon={null}
						href="?theme=next"
						label="Next.js"
						startIcon={<RiNextjsFill />}
					/>
					Angular Vue
					<GiCrane className="text-2xl" />
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Databases
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-full flex-wrap gap-2 whitespace-pre-line text-lg">
					<GiCargoCrane />
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Other techs
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-full flex-wrap gap-2 whitespace-pre-line text-lg">
					<PiCrane />
				</CardContent>
			</Card>
		</div>
	);
};
