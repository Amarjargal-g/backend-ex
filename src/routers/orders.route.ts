import express, { Express } from "express";
import { getOrders } from "../controllers/orders/get-orders";
import { getOrderById } from "../controllers/orders/get-order-by-id";
import { addOrders } from "../controllers/orders/add-orders";
import { updateOrders } from "../controllers/orders/update-orders";

export const ordersRouter = express.Router();
ordersRouter.post("/:id", addOrders);
ordersRouter.get("/", getOrders);
ordersRouter.get("/:id", getOrderById);
ordersRouter.put("/:id", updateOrders);
//   ordersRouter.delete("/:id", deleteFoods);
