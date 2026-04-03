"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  email: string;
  amount: number;
  date: number;
  total: number;
  deliveryAddress: string;
  status: "delivered" | "pending" | "cancelled";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  {
    accessorKey: "deliveryAddress",
    header: "Delivery Address",
  },
];
