import { Category } from "@/lib/types"
import { FoodCard } from "./FoodCard"

type FoodCategoryProps = {
  category: Category
}

export const FoodCategory = (props: FoodCategoryProps) => {
  const { category } = props
  return (
    <div>
      <div>
        <h1>{category.name}</h1>
      </div>
      <div>
        {category.foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  )
}
