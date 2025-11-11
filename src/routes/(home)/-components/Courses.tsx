import type { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CourseCategory } from "@/routes/cv/-components/types";

export interface CoursesProps {
	courseCategories: CourseCategory[];
}

export const Courses: FC<CoursesProps> = ({ courseCategories }) => (
	<div className="grid gap-4 lg:grid-cols-2">
		{courseCategories.map((category) => {
			return (
				<Card key={category.type}>
					<CardHeader>
						<CardTitle className="font-bold text-lg">
							{category.type}
						</CardTitle>
					</CardHeader>
					<CardContent className="h-full whitespace-pre-line text-lg">
						{category.courses.map((course) => (
							<p key={course}>{course}</p>
						))}
					</CardContent>
				</Card>
			);
		})}
	</div>
);
