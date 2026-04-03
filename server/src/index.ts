import express from "express";
import { foodRouter } from "./routers/foods.route";
import { categoryRouter } from "./routers/categories.route";

import { ordersRouter } from "./routers/orders.route";
import { userRouter } from "./routers/user.route";
import cors from "cors";
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/foods", foodRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);
app.use("/orders", ordersRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
