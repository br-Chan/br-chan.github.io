import {
	FaCar,
	FaChessKnight,
	FaHouse,
	FaKeyboard,
	FaSpotify,
} from "react-icons/fa6";
import { BadgeLink } from "@/components/BadgeLink";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getRandomLofiSpelling } from "@/lib/utils";
import { TypingChart } from "./TypingChart";

// TODO: make this configurable in json rather than hard-coded?
export const Hobbies = () => (
	<div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
		<Card className="sm:col-span-2 2xl:col-span-3">
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					Touch Typing
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<p>
					I was a hunt-and-pecker until 2017, when I started learning
					touch typing. Over the next 3 years of practice, my typing
					speed grew to about 100 WPM (words per minute) and I set my
					sights on the other keyboard layouts. I began learning
					Dvorak in 2020 and Colemak in 2025.
				</p>
				<p>
					My personal record for 30 sec is 143 WPM (English 1k), but
					my current long-running goal is to master as many keyboard
					layouts as possible, without losing mastery over any of
					them. This is harder than it sounds - it's like when you
					switch from JavaScript to Java and forget to add semicolons
					all the time, but 30 times worse.
				</p>
				<TypingChart />
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-[#19191c] text-[#e2b714]"
						href="https://monkeytype.com/profile/DvorakTurkey"
						label="Monkeytype profile"
						startIcon={<FaKeyboard />}
						target="_blank"
					/>
					<BadgeLink
						className="bg-[#d52f3a]"
						href="https://www.nitrotype.com/racer/allors4612"
						label="Nitro Type profile"
						startIcon={<FaCar />}
						target="_blank"
					/>
				</span>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					The Battle of Polytopia
				</CardTitle>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					A 4X turn-based strategy game for mobile and PC. I started
					actively playing in 2023, and found that I enjoyed it
					immensely and was quite good at it. It's a great game to
					play with friends (if they remember to play their turns!).
					<br />
					<br />
					If you're also a player, feel free to send me a game invite!
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-[#FD6CA4]"
						href="https://polytopia.io/"
						label="Polytopia official website"
						startIcon={<FaHouse />}
						target="_blank"
					/>
				</span>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">Reading</CardTitle>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					<b>Currently reading:</b> <i>Nineteen Eighty-Four</i>
					<br />
					<b>Just finished:</b> <i>Dune Messiah</i>
					<br />
					<br />
					<b>Top book series:</b>
				</p>
				<ol>
					<li>
						1. <i>Lord of the Rings</i>
					</li>
					<li>
						2. <i>Mortal Engines</i>
					</li>
					<li>
						3. <i>Inheritance Cycle</i>
					</li>
				</ol>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-black"
						href="https://www.poetryfoundation.org/poems/48634/eldorado-56d22a0920778"
						label="'Eldorado' - a nice poem"
						startIcon={<FaChessKnight />}
						target="_blank"
					/>
				</span>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					{`${getRandomLofiSpelling(true)}`} Music
				</CardTitle>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					I predominantly listen to {`${getRandomLofiSpelling()}`}. My
					go-to {`${getRandomLofiSpelling()}`} artist is Purrple Cat,
					who makes {`${getRandomLofiSpelling()}`} music for Lofi Girl
					while also releasing her own unlabeled{" "}
					{`${getRandomLofiSpelling()}`} tracks.
					{/* Image here */}
					<br />
					<br />
					{`${getRandomLofiSpelling(true)}`} isn't for everyone, and
					even I have preferences for certain sub-genres of{" "}
					{`${getRandomLofiSpelling()}`} over other{" "}
					{`${getRandomLofiSpelling()}`} genres. One thing I hate
					about {`${getRandomLofiSpelling()}`} is how many different
					ways there are to spell {`${getRandomLofiSpelling()}`}.
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-black text-[#1ed760]"
						href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE"
						label="Purrple Cat"
						startIcon={<FaSpotify />}
						target="_blank"
					/>
				</span>
			</CardFooter>
		</Card>
		{/* <Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					<span className="font-sans">Comic Sans</span>
					{" / "}
					<span className="font-mono">Comic Mono</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					One day, I made the font of my IDE a monospaced version of
					Comic Sans as a joke. One year later, I don't think it's a
					joke anymore. I have Comic Mono applied to all my IDEs, the
					terminal, and my browser's monospace default.
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-[#252423]"
						href="https://dtinth.github.io/comic-mono-font/"
						label="Comic Mono download"
						startIcon={<FaDownload />}
						target="_blank"
					/>
				</span>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle className="font-bold text-lg">
					The Best FOSS Password Manager
				</CardTitle>
			</CardHeader>
			<CardContent className="h-full whitespace-pre-line">
				<p>
					Ever felt scared of using a password manager because of how
					insecure it was? Never fear - now YOU can keep all your
					private credentials safe on GitHub! 🚀
					<br />
					Create an account by adding a csv file and add all your very
					very real passwords to it - it's as simple as that! Keeping
					all your important credentials on a public platform has
					never been easier.
				</p>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						href="https://github.com/br-Chan/the-best-FOSS-password-manager"
						label="The Best FOSS Password Manager"
						startIcon={<FaLock />}
						target="_blank"
						type="GitHub"
					/>
				</span>
			</CardFooter>
		</Card> */}
	</div>
);
