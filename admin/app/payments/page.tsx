import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  const getData = await fetch(`http://localhost:8080/orders/userId`);
  return [
    // {
    //   id: "string",
    //   email: "string",
    //   amount: 0,
    //   date: 0,
    // },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
