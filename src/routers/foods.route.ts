import express, { Express } from "express";
import { getFoods } from "../controllers/foods/get-foods";
import { createFoods } from "../controllers/foods/create-foods";
import { updateFoods } from "../controllers/foods/update.foods";
import { deleteFoods } from "../controllers/foods/delete-foods";

const foodRouter = express.Router();
export const registerFoodsRoute = (app: Express) => {
  foodRouter.post("/", getFoods);
  foodRouter.get("/", createFoods);
  foodRouter.put("/:id", updateFoods);
  foodRouter.delete("/:id", deleteFoods);
  app.use("/foods", foodRouter);
};
