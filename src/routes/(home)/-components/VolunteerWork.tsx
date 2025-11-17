import { PiCowFill, PiSwordFill } from "react-icons/pi";
import { BadgeLink } from "@/components/BadgeLink";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

// TODO: make this configurable in json rather than hard-coded?
export const VolunteerWork = () => (
	<div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					WDCC Project Member
				</CardTitle>
				<CardDescription>
					<span className="font-bold">Apr 2025</span>
					&nbsp;-&nbsp;
					<span className="space-x-1 font-bold">Oct 2025</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					I was a full-stack software developer at the Web Development
					and Consulting Club! In a team of 11, we revamped and
					deployed the University of Auckland Badminton Club's web
					portal for member management and court bookings.
					<br />I created components for the frontend, worked on
					backend services and endpoints and built frontend interfaces
					such as login, onboarding flows and admin interfaces. My
					last feature will hopefully be implementing{" "}
					<a
						className="font-normal-mono"
						href="https://nextjs.org/?uwu=true"
						rel="noopener"
						target="_blank"
					>
						?uwu=true
					</a>{" "}
					to the logo :)
					{/* <br />
					This was among the best experiences I've had in my degree
					(and possibly beyond?), where I got to meet so many people,
					learn so many new things and genuinely have a lot of fun. */}
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						href="https://uoabadminton.co.nz/"
						label="Deployment"
						target="_blank"
						type="Deployment"
					/>
					<BadgeLink
						href="https://github.com/UoaWDCC/uabc-web"
						label="GitHub"
						target="_blank"
						type="GitHub"
					/>
					<BadgeLink
						className="bg-[#3a86fe]"
						href="https://wdcc.co.nz/"
						label="WDCC"
						startIcon={<PiCowFill />}
						target="_blank"
					/>
				</span>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					Part III SOFTENG Class Representative
				</CardTitle>
				<CardDescription>
					<span className="font-bold">Mar 2025</span>
					&nbsp;-&nbsp;
					<span className="space-x-1 font-bold">Nov 2025</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					I was one of two class reps for the Part III Software
					Engineering Cohort of 2025.
					<br />I was responsible for collecting unbiased feedback
					from the cohort, working with staff and the cohort to
					address any concerns, and helping to coordinate
					department-wide events.
					<br />
					Being a class rep this year was incredibly rewarding; I got
					to meet and talk to so many new people (staff and students
					alike) and I got to appreciate how awesome everyone in our
					cohort was!
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						href="https://www.linkedin.com/in/alex-b-nz/"
						label="Alex Brown, my fellow class rep"
						target="_blank"
						type="LinkedIn"
					/>
				</span>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					Open Source Contributor
				</CardTitle>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					I contribute to the Polytopia Damage Calculator, the most
					popular damage calculator for The Battle of Polytopia, a
					turn-based strategy game.
					<br />
					My main contributions include fixing calculation bugs and
					updating the calculator to support new versions of the game
					as they are released.
					<br />
					Contributions welcome!
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-[#FD6CA4]"
						href="https://polytopia-damage-calculator.firebaseapp.com/"
						label="Polytopia Damage Calculator"
						startIcon={<PiSwordFill />}
						target="_blank"
					/>
					<BadgeLink
						href="https://github.com/amigobrewbrew/polytopiacalculatorfirebase-public"
						label="GitHub"
						target="_blank"
						type="GitHub"
					/>
				</span>
			</CardFooter>
		</Card>
	</div>
);
