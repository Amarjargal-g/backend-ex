import { cookies } from "next/headers"
import { Category } from "@/lib/types"
import { CardSheet } from "./_components/CardSheet"
import { FoodCard } from "./_components/FoodCard"
import { Header } from "./_components/Header"
import { Label } from "@/components/ui/label"
import { Footer } from "./_components/Footer"

async function getCategories(): Promise<Category[]> {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  const res = await fetch("http://localhost:8080/categories", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  const data = await res.json()
  return data
}

export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="w-full bg-[#383839]">
      <Header />
      <img src="/BG.png" alt="background" />

      <div className="flex flex-col gap-8 px-4 py-6">
        {categories.map((category) => (
          <section key={category.id}>
            <Label className="mb-4 block text-xl font-bold text-white">
              {category.name}
            </Label>

            <div className="grid grid-cols-3 gap-4">
              {category.foods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  )
}
