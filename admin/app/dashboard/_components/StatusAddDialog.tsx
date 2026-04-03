import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StatusAddDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className="bg-black text-white ">
            Change Delivery State
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change Delivery State</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-4">
          <Button className="bg-gray-200 text-black">Delivered</Button>
          <Button className="bg-gray-200 text-black">Pending</Button>
          <Button className="bg-gray-200 text-black">Cancelled</Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose
            render={
              <Button type="button" className="w-full">
                Save
              </Button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
