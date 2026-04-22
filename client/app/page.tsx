import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Category } from "@/lib/types"
import { FoodCard } from "./_components/FoodCard"
import { Header } from "./_components/Header"
import { Footer } from "./_components/Footer"

async function getCategories(): Promise<Category[]> {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  try {
    const res = await fetch("http://localhost:8080/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      return []
    }

    const data = await res.json()
    return data
  } catch {
    return []
  }
}

export default async function Home() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    redirect("/sign-up")
  }

  const categories = await getCategories()

  return (
    <main className="w-full bg-[#2b2b2c]">
      <Header />
      <div className="bg-black">
        <img
          src="/BG.png"
          alt="background"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 md:px-8">
        {categories.map((category) => (
          <section key={category.id}>
            <h2 className="mb-4 text-2xl font-bold text-white">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
