"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "@/app/types/order";
import { ChevronDown, ChevronUp } from "lucide-react";

type CreateColumnsProps = {
  onStatusChange: (id: string, status: Payment["status"]) => void;
  updatingOrderId?: string | null;
};

export const createColumns = ({
  onStatusChange,
  updatingOrderId,
}: CreateColumnsProps): ColumnDef<Payment>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "itemsSummary",
    header: "Ordered Items",
    cell: ({ row }) => {
      const text = String(row.getValue("itemsSummary") ?? "-");
      return <p className="max-w-[260px] truncate">{text}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"));
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }).format(date);
    },
  },
  {
    accessorKey: "deliveryAddress",
    header: "Delivery Address",
  },
  {
    accessorKey: "status",
    header: "Delivery State",
    cell: ({ row }) => {
      const orderId = String(row.getValue("id"));
      const status = row.getValue("status") as Payment["status"];
      const isUpdating = updatingOrderId === orderId;

      const styleByStatus: Record<
        Payment["status"],
        { border: string; text: string; arrow: string }
      > = {
        pending: {
          border: "border-red-500",
          text: "text-black",
          arrow: "text-black",
        },
        cancelled: {
          border: "border-gray-400",
          text: "text-gray-500",
          arrow: "text-gray-400",
        },
        delivered: {
          border: "border-green-500",
          text: "text-black",
          arrow: "text-black",
        },
      };

      const style = styleByStatus[status];

      return (
        <div
          className={`relative inline-flex items-center gap-3 rounded-full border bg-transparent px-3 py-1 ${style.border} ${isUpdating ? "opacity-50" : ""}`}
        >
          <select
            className="absolute inset-0 z-10 cursor-pointer opacity-0 disabled:cursor-not-allowed"
            value={status}
            disabled={isUpdating}
            onChange={(e) =>
              onStatusChange(orderId, e.target.value as Payment["status"])
            }
            aria-label="Change delivery state"
          >
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="delivered">Delivered</option>
          </select>
          <span className={`text-xs font-medium capitalize ${style.text}`}>
            {status}
          </span>
          <div className={`flex flex-col gap-0.5 ${style.arrow}`}>
            <ChevronUp size={12} />
            <ChevronDown size={12} />
          </div>
        </div>
      );
    },
  },
];
