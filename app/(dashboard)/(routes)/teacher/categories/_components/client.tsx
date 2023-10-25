"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "./data-table";
import { CreateCategoryModal } from "./modals/create-category-modal";

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient = ({ data }: CategoryClientProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <Heading
          title={`Danh mục (${data.length})`}
          description="Các danh mục/học phần của bạn"
        />
        <div className="flex items-center py-2">
          <CreateCategoryModal />
        </div>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};
