import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export default function CVExperience() {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl underline">Experience</h2>
			{/* TODO: put in json */}
			{/* TODO: create component for this */}
			<Card>
				<CardHeader>
					<CardTitle>
						<span className="font-bold">Software Developer</span>
						&nbsp;at&nbsp;
						<span className="font-bold">
							Web Development and Consulting Club, Auckland
						</span>
					</CardTitle>
					<CardDescription>Mar 2025 - present</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						• Full-stack development: utilising Next.js and Payload
						CMS to develop a member management and booking portal
						for the University of Auckland Badminton Club.
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>
						<span className="font-bold">
							Software Engineer Intern
						</span>
						&nbsp;at&nbsp;
						<span className="font-bold">
							Allied Telesis, Christchurch
						</span>
					</CardTitle>
					<CardDescription>Nov 2024 - Feb 2025</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						• Designed and developed a full-stack web application to
						seamlessly manage staff recruitment.
					</p>
					<p>
						• Elicited requirements from clients and created,
						organised, completed 120+ Jira tasks.
					</p>
					<p>
						• Enabled application tracking and sorting,
						authentication and professional UI/UX in Angular
						frontend.
					</p>
					<p>
						• Designed 5 database models for MySQL using Sequelize
						ORM, with many-to-many relationships to represent
						applicants, applications, staff users, etc.
					</p>
					<p>
						• Created 32 API endpoints for Express backend, with
						Postman for testing.
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>
						<span className="font-bold">Private Tutor</span>
						&nbsp;at&nbsp;
						<span className="font-bold">MyTuition, Auckland</span>
					</CardTitle>
					<CardDescription>Apr 2024 - May 2024</CardDescription>
				</CardHeader>
				<CardContent>
					<p>
						• IGCSE Mathematics - teach students new concepts,
						review past tests and provide support for exams.
					</p>
				</CardContent>
			</Card>
		</section>
	);
}
