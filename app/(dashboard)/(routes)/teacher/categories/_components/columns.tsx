"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CategoryAction } from "./category-action-menu";

export type CategoryColumn = {
  id: string;
  name: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CategoryAction data={row.original} />,
  },
];
