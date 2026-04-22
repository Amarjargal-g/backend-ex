import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ChevronRight, MapPin } from "lucide-react"

export function AddressButton() {
  return (
    <div className="rounded-3xl">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="hidden h-10 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 md:flex"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-red-400" />
                <p className="text-sm text-red-400">Delivery Address:</p>
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <p>Add Location</p>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Please Write Your Delivery Address!</DialogTitle>
            <Input
              type="text"
              placeholder="Please share your complete address"
              className="border border-gray-300"
            ></Input>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                className="border-gray border bg-transparent text-black"
              >
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" className="bg-black text-white">
                Deliver here
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
