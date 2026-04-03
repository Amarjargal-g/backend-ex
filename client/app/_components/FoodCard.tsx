"use client"

import { CardContexts } from "@/app/contexts/CardContext"
import { Food } from "@/lib/types"
import { Check, Plus } from "lucide-react"
import { useContext, useState } from "react"

type FoodCardProps = {
  food: Food
}

export const FoodCard = (props: FoodCardProps) => {
  const { food } = props
  const [added, setAdded] = useState(false)
  const { addCard } = useContext(CardContexts)

  const onAdd = () => {
    addCard(food, 1)
    setAdded(true)
  }

  const onRemove = () => {
    setAdded(false)
  }

  return (
    <div className="w-[397.33px] overflow-hidden rounded-2xl bg-white shadow-sm">
      <div>
        <img
          src={food.image}
          alt={food.name}
          className="ml-4 h-52.5 w-[365.33px] rounded-3xl object-cover p-3"
        />

        <button
          onClick={added ? onRemove : onAdd}
          className={`absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-red-600">
            {food.name}
          </span>
          <span className="text-sm font-semibold text-gray-900">
            ${Number(food.price || 0).toFixed(2)}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-snug text-gray-500">
          {food.description}
        </p>
      </div>
    </div>
  )
}
