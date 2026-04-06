import express from "express";
import { getCategories } from "../controllers/categories/get-categories";
import { addCategories } from "../controllers/categories/add-categories";
import { updateCategories } from "../controllers/categories/update.categories";
import { deleteCategories } from "../controllers/categories/delete-categories";
import { getCategoriesById } from "../controllers/categories/get-categories-by-id";
import { authMiddleware } from "../controllers/auth/authMiddleware";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", addCategories);
categoryRouter.get("/:id", getCategoriesById);
categoryRouter.put("/:id", updateCategories);
categoryRouter.delete("/:id", deleteCategories);
