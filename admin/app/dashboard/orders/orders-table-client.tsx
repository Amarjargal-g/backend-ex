"use client";

import { createColumns } from "@/app/payments/columns";
import { DataTable } from "@/app/payments/data-table";
import type { Payment } from "@/app/types/order";
import { useEffect, useMemo, useState } from "react";

type OrdersTableClientProps = {
  data: Payment[];
};

export function OrdersTableClient({ data }: OrdersTableClientProps) {
  const [rows, setRows] = useState<Payment[]>(data);
  const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onStatusChange = async (id: string, nextStatus: Payment["status"]) => {
    setUpdatingOrderId(id);
    try {
      const backendStatus =
        nextStatus === "cancelled" ? "CANCELED" : nextStatus.toUpperCase();

      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: backendStatus,
        }),
      });

      if (!res.ok) return;

      setRows((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: nextStatus } : item,
        ),
      );
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const columns = useMemo(
    () =>
      createColumns({
        onStatusChange,
        updatingOrderId,
      }),
    [updatingOrderId],
  );

  if (!mounted) {
    return <div className="h-24" />;
  }

  return <DataTable columns={columns} data={rows} />;
}
