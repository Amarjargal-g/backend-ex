export type Payment = {
  id: string;
  email: string;
  itemsSummary: string;
  amount: number;
  date: number | string;
  total: number;
  deliveryAddress: string;
  status: "delivered" | "pending" | "cancelled";
};
