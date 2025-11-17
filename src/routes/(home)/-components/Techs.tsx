import {
	BiLogoCPlusPlus,
	BiLogoJavascript,
	BiLogoTypescript,
} from "react-icons/bi";
import { GiCargoCrane, GiCrane } from "react-icons/gi";
import { PiCrane, PiCraneTowerBold } from "react-icons/pi";
import { RiJavaLine, RiNextjsFill } from "react-icons/ri";
import { BadgeLink } from "@/components/BadgeLink";
import { TechBadge } from "@/components/TechBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
					<TechBadge
						label="Java"
						startIcon={RiJavaLine}
						themeColor="#017694"
					/>
					<TechBadge
						label="JavaScript"
						startIcon={BiLogoJavascript}
						themeColor="#EFC929"
					/>
					<TechBadge
						label="TypeScript"
						startIcon={BiLogoTypescript}
						themeColor="#3178c6"
					/>
					<TechBadge
						label="C / C++"
						startIcon={BiLogoCPlusPlus}
						themeColor="#659AD2"
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
