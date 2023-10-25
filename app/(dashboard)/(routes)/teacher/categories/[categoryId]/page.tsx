import { db } from "@/lib/db";
import { EditCategoryModal } from "../_components/modals/edit-category-modal";
import { useParams } from "next/navigation";

const CategoryIdPage = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const category = await db.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });
  return (
    <div className="flex items-center py-2">
      <EditCategoryModal name={category?.name} />
    </div>
  );
};

export default CategoryIdPage;
