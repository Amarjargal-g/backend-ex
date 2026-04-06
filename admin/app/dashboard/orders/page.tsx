import { columns } from "@/app/payments/columns";
import { DataTable } from "@/app/payments/data-table";

import { DatePickerWithRange } from "@/components/date-picker";
import { MyHeader } from "../_components/MyHeader";

import { getOrders } from "@/app/utils/get-orders";

export default async function OrderPage() {
  const data = await getOrders();
  return (
    <div className="w-292.75 h-200 bg-white rounded-2xl ml-8">
      <div className="flex justify-between p-4">
        <div>
          <h1 className="text-bold text-2xl">Orders</h1>
        </div>
        <div className="flex">
          <DatePickerWithRange />
          <MyHeader />
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
