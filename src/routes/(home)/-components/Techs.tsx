import {
	BiLogoCPlusPlus,
	BiLogoJavascript,
	BiLogoTypescript,
} from "react-icons/bi";
import {
	FaAngular,
	FaCode,
	FaGitAlt,
	FaHtml5,
	FaInfinity,
	FaJira,
	FaPython,
	FaReact,
	FaVuejs,
} from "react-icons/fa6";
import { PiFileCss, PiFileSql, PiLightningFill } from "react-icons/pi";
import {
	RiFirebaseFill,
	RiJavaLine,
	RiNextjsFill,
	RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandMysql, TbMathMaxMin } from "react-icons/tb";

import { TechBadge } from "@/components/TechBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Avert your gaze! I totally did *not* hard code every single tech badge!
 */
export const Techs = () => {
	return (
		<div className="grid gap-4 lg:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Languages
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-fit flex-wrap gap-2 whitespace-pre-line text-lg">
					<TechBadge
						label="Java"
						startIcon={RiJavaLine}
						themeColor="#ED2025"
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
						label="Python"
						startIcon={FaPython}
						themeColor="#376A94"
					/>
					<TechBadge
						label="SQL"
						startIcon={PiFileSql}
						themeColor="#7BB400"
					/>
					<TechBadge
						label="C / C++"
						startIcon={BiLogoCPlusPlus}
						themeColor="#659AD2"
					/>
					<TechBadge
						label="MATLAB"
						startIcon={TbMathMaxMin}
						themeColor="#F71500"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Web Frameworks and Libraries
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-fit flex-wrap gap-2 whitespace-pre-line text-lg">
					<TechBadge
						label="React"
						startIcon={FaReact}
						themeColor="#087EA4"
					/>
					<TechBadge
						label="Next.js"
						startIcon={RiNextjsFill}
						themeColor="#000000"
					/>
					<TechBadge
						label="Angular"
						startIcon={FaAngular}
						themeColor="#F81B58"
					/>
					<TechBadge
						label="Vue"
						startIcon={FaVuejs}
						themeColor="#42B883"
					/>
					<TechBadge
						label="HTML"
						startIcon={FaHtml5}
						themeColor="#D42301"
					/>
					<TechBadge
						label="CSS"
						startIcon={PiFileCss}
						themeColor="#66309A"
					/>
					<TechBadge
						label="Tailwind CSS"
						startIcon={RiTailwindCssFill}
						themeColor="#00BCFF"
					/>
					<TechBadge
						label="Express.js"
						startIcon={FaCode}
						themeColor="#000000"
					/>
					<TechBadge
						label="Vite"
						startIcon={PiLightningFill}
						themeColor="#F7A807"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Databases
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-fit flex-wrap gap-2 whitespace-pre-line text-lg">
					<TechBadge
						label="MySQL"
						startIcon={TbBrandMysql}
						themeColor="#00758F"
					/>
					<TechBadge
						label="Firebase"
						startIcon={RiFirebaseFill}
						themeColor="#D62B00"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-lg">
						Other techs
					</CardTitle>
				</CardHeader>
				<CardContent className="flex h-fit flex-wrap gap-2 whitespace-pre-line text-lg">
					<TechBadge
						label="Git"
						startIcon={FaGitAlt}
						themeColor="#E84E31"
					/>
					<TechBadge
						label="Jira"
						startIcon={FaJira}
						themeColor="#1868DB"
					/>
					<TechBadge
						label="Arduino"
						startIcon={FaInfinity}
						themeColor="#179297"
					/>
				</CardContent>
			</Card>
		</div>
	);
};
