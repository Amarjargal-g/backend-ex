import { Categories, Category } from "../_components/Categories";
import { FoodCard } from "../_components/FoodCard";

export default async function FoodsPage() {
  const res = await fetch(`http://localhost:8080/categories`);
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
