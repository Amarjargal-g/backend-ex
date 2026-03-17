import express, { Express } from "express";
import { getCategories } from "../controllers/categories/get-categories";
import { createCategories } from "../controllers/categories/create-categories";
import { updateCategories } from "../controllers/categories/update.categories";
import { deleteCategories } from "../controllers/categories/delete-categories";

export const categoryRouter = express.Router();

categoryRouter.post("/", getCategories);
categoryRouter.get("/", createCategories);
categoryRouter.put("/:id", updateCategories);
categoryRouter.delete("/:id", deleteCategories);
