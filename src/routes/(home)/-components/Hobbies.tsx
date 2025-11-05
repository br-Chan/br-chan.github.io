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
					Polytopia is a 4X turn-based strategy game for mobile and
					PC. I started actively playing in 2023, and found that I
					enjoyed it immensely and was quite good at it. It's a great
					game to play with friends (if only they remembered to play
					their turns!).
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
					Currently reading: Dune Messiah
					<br />
					Top book series:
				</p>
				<ol>
					<li>1. Lord of the Rings</li>
					<li>2. Mortal Engines</li>
					<li>3. Inheritance Cycle</li>
				</ol>
			</CardContent>
			<CardFooter>
				<span className="flex flex-wrap gap-2">
					<BadgeLink
						className="bg-black"
						href="https://www.poetryfoundation.org/poems/48634/eldorado-56d22a0920778"
						label="'Eldorado' - my favourite poem"
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
					Among other music genres, I predominantly listen to{" "}
					{`${getRandomLofiSpelling()}`}. My favourite{" "}
					{`${getRandomLofiSpelling()}`} artist is Purrple Cat, who
					makes {`${getRandomLofiSpelling()}`} music for Lofi Girl
					while also releasing her own unlabeled{" "}
					{`${getRandomLofiSpelling()}`} tracks.
				</p>
				{/* Image here */}
				<p>
					{`${getRandomLofiSpelling(true)}`} isn't for everyone
					though, and even I have preferences for certain sub-genres
					of {`${getRandomLofiSpelling()}`} over other{" "}
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
	</div>
);
