import express, { type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";
import { registerFoodsRoute } from "./src/routers/foods.route";
import { registerCategoryRoute } from "./src/routers/categories.route";
import { registerUserRoute } from "./src/routers/user.route";
const prisma = new PrismaClient();

const app = express();
const PORT = 8080;

app.use(express.json());

registerCategoryRoute(app);
registerFoodsRoute(app);
registerUserRoute(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
