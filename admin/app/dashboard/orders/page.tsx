import { DatePickerWithRange } from "@/components/date-picker";
import { MyHeader } from "../_components/MyHeader";
import { OrdersTableClient } from "./orders-table-client";

import { getOrders } from "@/app/utils/get-orders";

export const dynamic = "force-dynamic";

export default async function OrderPage() {
  const data = await getOrders();
  return (
    <div className="w-292.75 h-200 bg-white rounded-2xl ml-8">
      <div className="flex justify-between p-4">
        <div>
          <h1 className="text-bold text-2xl">Orders</h1>
          <p className="text-sm text-muted-foreground">{data.length} orders</p>
        </div>
        <div className="flex">
          <DatePickerWithRange />
          <MyHeader />
        </div>
      </div>
      <OrdersTableClient data={data} />
    </div>
  );
}
