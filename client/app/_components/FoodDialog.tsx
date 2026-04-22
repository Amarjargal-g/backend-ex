"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Food } from "@/lib/types"
import { getCloudinaryImageUrl } from "@/lib/cloudinary"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

type FoodDialogProps = {
  food: Food
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: (quantity: number) => void
}

export const FoodDialog = ({
  food,
  open,
  onOpenChange,
  onConfirm,
}: FoodDialogProps) => {
  const [quantity, setQuantity] = useState(1)
  const unitPrice = Number(food.price || 0)
  const totalPrice = unitPrice * quantity

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader className="flex gap-3">
          <DialogTitle className="text-xl font-semibold text-red-600">
            {food.name}
          </DialogTitle>

          <img
            src={getCloudinaryImageUrl(food.image)}
            alt={food.name}
            className="h-56 w-full rounded-xl object-cover"
          />
          <DialogDescription className="text-sm text-gray-600">
            {food.description}
          </DialogDescription>
          <div className="flex items-center justify-between">
            <p className="text-sm text-black">Total price</p>
            <p className="text-lg font-semibold text-black">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-black">Quantity</p>
            <div className="flex items-center gap-2">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-black"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm font-medium text-black">
                {quantity}
              </span>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-black"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="w-full bg-black text-white hover:bg-gray-900"
            onClick={() => onConfirm(quantity)}
          >
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
