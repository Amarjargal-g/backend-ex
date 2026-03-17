import express, { Express } from "express";

import { createFoods } from "../controllers/foods/create-foods";
import { updateFoods } from "../controllers/foods/update.foods";
import { deleteFoods } from "../controllers/foods/delete-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { getFoods } from "../controllers/foods/get-foods";

export const foodRouter = express.Router();

foodRouter.get("/:id", getFoodById);
foodRouter.get("/", getFoods);
foodRouter.post("/", createFoods);
foodRouter.put("/:id", updateFoods);
foodRouter.delete("/:id", deleteFoods);
