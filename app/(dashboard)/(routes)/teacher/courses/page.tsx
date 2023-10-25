import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { DataTable } from "./_components/data-table";
import { CourseWithCategory, columns } from "./_components/columns";

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const coursesWithCategory: CourseWithCategory[] = courses.map((item) => ({
    id: item.id,
    userId: item.userId,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    price: item.price,
    isPublished: item.isPublished,
    categoryName: item.category?.name,
    createdAt: item.createdAt,
  }));
  console.log(courses);
  return (
    <div className="p-6">
      <DataTable columns={columns} data={coursesWithCategory} />
    </div>
  );
};

export default CoursesPage;
