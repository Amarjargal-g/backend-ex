import express, { Express } from "express";
import { getCategories } from "../controllers/categories/get-categories";
import { createCategories } from "../controllers/categories/create-categories";
import { updateCategories } from "../controllers/categories/update.categories";
import { deleteCategories } from "../controllers/categories/delete-categories";

const categoryRouter = express.Router();

export const registerCategoryRoute = (app: Express) => {
  categoryRouter.post("/", getCategories);
  categoryRouter.get("/", createCategories);
  categoryRouter.put("/:id", updateCategories);
  categoryRouter.delete("/:id", deleteCategories);
  app.use("/categories", categoryRouter);
};
