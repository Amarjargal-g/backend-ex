import express from "express";
import { getOrders } from "../controllers/orders/get-orders";
import { getOrderById } from "../controllers/orders/get-order-by-id";
import { addOrders } from "../controllers/orders/add-orders";
import { updateOrders } from "../controllers/orders/update-orders";
import { deleteOrders } from "../controllers/orders/delete-orders";

export const ordersRouter = express.Router();
ordersRouter.post("/:userId", addOrders);
ordersRouter.get("/", getOrders);
ordersRouter.get("/:id", getOrderById);
ordersRouter.put("/:id", updateOrders);
ordersRouter.delete("/:id", deleteOrders);
