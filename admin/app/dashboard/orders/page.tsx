import { DatePickerWithRange } from "@/components/date-picker";
import { Button, Input } from "@base-ui/react";
import { StatusAddDialog } from "../_components/StatusAddDialog";

export default function OrdersPage() {
  return (
    <div className="w-292.75 h-200 bg-white rounded-2xl ml-8">
      <div className="flex justify-between p-4">
        <div>
          <h1 className="text-bold text-2xl"> Orders</h1>
        </div>
        <div className="flex">
          <DatePickerWithRange />
          <StatusAddDialog />
        </div>
      </div>
    </div>
  );
}
