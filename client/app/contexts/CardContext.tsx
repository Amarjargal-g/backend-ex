"use client"

import { ReactNode, createContext, useState } from "react"

type Food = {
  id: string
  name: string
  price: number
  image?: string
}

type FoodCard = {
  food: Food
  quantity: number
}

type CardContextType = {
  card: FoodCard[]
  addCard: (food: Food, quantity: number) => void
  removeFromCard: (foodId: string) => void
  updateQuantity: (foodId: string, quantity: number) => void
}

export const CardContexts = createContext({} as CardContextType)

type CardContextProviderProps = {
  children: ReactNode
}

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [card, setCard] = useState<FoodCard[]>([])

  const addCard = (food: Food, quantity: number) => {
    setCard((prev) => [...prev, { food, quantity }])
  }

  const removeFromCard = (foodId: string) => {
    setCard((prev) => prev.filter((item) => item.food.id !== foodId))
  }

  const updateQuantity = (foodId: string, quantity: number) => {
    setCard((prev) =>
      prev.map((item) =>
        item.food.id === foodId ? { ...item, quantity } : item
      )
    )
  }

  const value = {
    card,
    addCard,
    removeFromCard,
    updateQuantity,
  }

  return <CardContexts.Provider value={value}>{children}</CardContexts.Provider>
}
