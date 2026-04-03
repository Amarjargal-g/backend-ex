"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEventHandler, useState } from "react";
import { Category } from "./Categories";
import { LoaderCircle } from "lucide-react";

type FoodAddDialogProps = {
  categories: Category[];
};

export const FoodAddDialog = ({ categories }: FoodAddDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState({
    foodName: "",
    price: "",
    categoryId: null,
    ingredients: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!food.foodName.trim() || !food.price || !food.categoryId) return;
    setLoading(true);
    try {
      await fetch(`http://localhost:8080/foods`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: food.foodName,
          price: food.price,
          foodCategoryId: Number(food.categoryId),
          ingredients: food.ingredients,
        }),
      });
      setFood({ foodName: "", price: "", categoryId: null, ingredients: "" });
      setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-3 pt-15 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <span className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center">
          +
        </span>
        <span>Add new dish</span>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Dish</DialogTitle>
          </DialogHeader>

          <div className="grid gap-3">
            <div>
              <Label htmlFor="foodName">Food Name</Label>
              <Input
                id="foodName"
                name="foodName"
                onChange={handleChange}
                value={food.foodName}
              />
            </div>
            <div>
              <Label htmlFor="price">Food Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={handleChange}
                value={food.price}
              />
            </div>
            <div>
              <Label htmlFor="ingredients">Ingredients</Label>
              <Input
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={food.ingredients}
              />
            </div>
            <div>
              <Label>Category</Label>
              <Select
                value={food.categoryId}
                onValueChange={(val) => setFood({ ...food, categoryId: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={String(cat.id)}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="image">Food Image</Label>
              <Input id="image" name="image" type="file" />
            </div>
          </div>

          <DialogFooter className="sm:justify-end">
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            ></DialogClose>
            <Button type="button" onClick={handleSubmit} disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Add Dish"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
