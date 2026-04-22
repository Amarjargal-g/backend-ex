import { cookies } from "next/headers";
import type { Payment } from "@/app/types/order";

const mapOrdersToPayments = (orders: any[]): Payment[] => {
  return (orders ?? []).map((order: any) => {
    const normalizedStatus = String(order.status ?? "pending").toLowerCase();
    const itemsSummary = (order.foodOrderItems ?? [])
      .map((item: any) => `${item.food?.name ?? "Food"} x${item.quantity ?? 0}`)
      .join(", ");

    const amount = (order.foodOrderItems ?? []).reduce(
      (sum: number, item: any) =>
        sum + Number(item.food?.price ?? 0) * Number(item.quantity ?? 0),
      0,
    );

    return {
      id: String(order.id),
      status:
        normalizedStatus === "canceled" ? "cancelled" : normalizedStatus,
      email: order.user?.email ?? "-",
      itemsSummary: itemsSummary || "-",
      amount,
      total: Number(order.totalPrice ?? amount),
      date: order.createdAt ?? "",
      deliveryAddress: order.deliveryAddress ?? "N/A",
    };
  });
};

export const getOrders = async (): Promise<Payment[]> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return [];
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch("http://localhost:8080/orders", {
    headers,
    cache: "no-store",
  });

  if (response.ok) {
    const data = await response.json();
    return mapOrdersToPayments(data.orders ?? []);
  }

  const myOrdersResponse = await fetch("http://localhost:8080/orders/me", {
    headers: {
      ...headers,
    },
    cache: "no-store",
  });

  if (!myOrdersResponse.ok) {
    return [];
  }

  const myOrdersData = await myOrdersResponse.json();
  return mapOrdersToPayments(myOrdersData.orders ?? []);
};
