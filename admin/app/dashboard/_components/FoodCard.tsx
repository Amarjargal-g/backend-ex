import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FoodAddDialog } from "./FoodAddDialog";
import { Category } from "./Categories";

type FoodCardProps = {
  category: Category;
  allCategories: Category[];
};

export const FoodCard = ({ category, allCategories }: FoodCardProps) => {
  return (
    <div className="bg-white border rounded-2xl w-292.75 p-4 ml-4 m-6">
      <Label className="text-bold text-3xl ml-2">{category.name}</Label>
      <div className="flex flex-wrap gap-4 p-2">
        <Card className="w-[270.75px] h-60.25 border border-red-500 border-dashed">
          <FoodAddDialog categories={allCategories} />
        </Card>

        {category.foods.map((food) => (
          <Card key={food.id} className="w-[270.75px] h-60.25">
            <img
              src="/food.png"
              alt={food.name}
              className="w-[238.74px] h-32.25 rounded-2xl p-2 ml-4"
            />
            <CardHeader>
              <CardAction>
                <div>${food.price}</div>
              </CardAction>
              <CardTitle className="text-red-500">{food.name}</CardTitle>
              <CardDescription>Category: {category.name}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
