import { ReactNode } from "react"

export type Food = {
  description: ReactNode
  id: string
  name: string
  price: number
  image?: string
}

export type Category = {
  id: string
  name: string
  foods: Food[]
}
