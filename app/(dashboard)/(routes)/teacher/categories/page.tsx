import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { CategoryColumn, columns } from "./_components/columns";
import { CreateCategoryModal } from "./_components/modals/create-category-modal";
import { CategoryClient } from "./_components/client";

const CategoryPage = async () => {
  const categories = await db.category.findMany();
  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
  }));
  return (
    <>
      <div className=" w-full px-5">
        <div className="flex-col">
          <div className="flex-1 space-x-4 p-8 pt-6">
            <CategoryClient data={formattedCategories} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
