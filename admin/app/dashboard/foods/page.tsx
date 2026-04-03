import { cookies } from "next/headers";
import { Categories, Category } from "../_components/Categories";
import { FoodCard } from "../_components/FoodCard";

export default async function FoodsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`http://localhost:8080/categories`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const categories: Category[] = await res.json();

  return (
    <div>
      <Categories />
      {categories.map((category) => (
        <FoodCard
          key={category.id}
          category={category}
          allCategories={categories}
        />
      ))}
    </div>
  );
}
