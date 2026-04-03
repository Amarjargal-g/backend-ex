import { cookies } from "next/headers";
import { Payment } from "../payments/columns";

export const getOrders = async (): Promise<Payment[]> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://localhost:8080/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};
