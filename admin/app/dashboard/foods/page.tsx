import { Categories, Category } from "../_components/Categories";
import { FoodCard } from "../_components/FoodCard";

const API_BASE = "http://localhost:8080";

export default async function FoodsPage() {
  const res = await fetch(`${API_BASE}/categories`, { cache: "no-store" });
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
