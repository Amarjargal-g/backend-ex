import { Badge } from "@/components/ui/badge";
import { AddCategory } from "./AddCategory";

export interface Food {
  id: number;
  name: string;
  price: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
}

export async function Categories() {
  const res = await fetch(`http://localhost:8080/categories`, {
    cache: "no-store",
  });
  const categories: Category[] = await res.json();

  return (
    <div className="bg-white border w-292.75 h-44 rounded-2xl p-4 ml-4">
      <div className="flex flex-wrap gap-2 items-center">
        <Badge
          variant="default"
          className="cursor-pointer rounded-full px-4 py-1 text-xl w-36.25 h-9"
        >
          All Dishes
          <span className="ml-2 bg-black text-white text-xl rounded-full px-2">
            {categories.reduce((a, c) => a + c.foods.length, 0)}
          </span>
        </Badge>

        {categories.map((category) => (
          <Badge
            key={category.id}
            variant="outline"
            className="cursor-pointer rounded-full px-4 py-1 text-xl w-36.25 h-9"
          >
            {category.name}
            <span className="ml-2 bg-black text-white font-bold rounded-full px-2 text-xs">
              {category.foods.length}
            </span>
          </Badge>
        ))}

        <AddCategory />
      </div>
    </div>
  );
}
