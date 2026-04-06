import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(userId: string): Promise<Payment[]> {
  const response = await fetch(`http://localhost:8080/orders/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  const data = await response.json();
  return data;
}

export default async function OrdersPage() {
  const userId = "your-user-id-here";
  const data = await getData(userId);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
