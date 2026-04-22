"use client"

import { CardContexts } from "@/app/contexts/CardContext"
import { Food } from "@/lib/types"
import { Check, Plus } from "lucide-react"
import { useContext, useState } from "react"
import { FoodDialog } from "@/app/_components/FoodDialog"
import { getCloudinaryImageUrl } from "@/lib/cloudinary"

type FoodCardProps = {
  food: Food
}

export const FoodCard = ({ food }: FoodCardProps) => {
  const [added, setAdded] = useState(false)
  const [open, setOpen] = useState(false)
  const { addCard } = useContext(CardContexts)

  const onConfirm = (quantity: number) => {
    addCard(food, quantity)
    setAdded(true)
    setOpen(false)
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative">
        <img
          src={getCloudinaryImageUrl(food.image)}
          alt={food.name}
          className="h-52 w-full object-cover"
        />

        <button
          onClick={() => (added ? setAdded(false) : setOpen(true))}
          className={`absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full shadow-md ${
            added
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-red-600">
            {food.name}
          </span>
          <span className="text-base font-semibold text-black">
            ${Number(food.price || 0).toFixed(2)}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-snug text-gray-500">
          {food.description}
        </p>
      </div>

      <FoodDialog
        food={food}
        open={open}
        onOpenChange={setOpen}
        onConfirm={onConfirm}
      />
    </div>
  )
}
