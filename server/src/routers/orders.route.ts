import express from "express";
import { getOrders } from "../controllers/orders/get-orders";
import { getOrderById } from "../controllers/orders/get-order-by-id";
import { addOrders } from "../controllers/orders/add-orders";
import { updateOrders } from "../controllers/orders/update-orders";
import { deleteOrders } from "../controllers/orders/delete-orders";
import { authMiddleware } from "../controllers/auth/authMiddleware";
import { authAdminMiddleware } from "../controllers/auth/authAdminMiddleware";
import { getMyOrders } from "../controllers/orders/get-my-orders";

export const ordersRouter = express.Router();
ordersRouter.post("/:userId", authMiddleware, addOrders);
ordersRouter.get("/", authMiddleware, authAdminMiddleware, getOrders);
ordersRouter.get("/me", authMiddleware, getMyOrders);
ordersRouter.get("/:id", authMiddleware, getOrderById);
ordersRouter.put("/:id", authMiddleware, updateOrders);
ordersRouter.delete("/:id", authMiddleware, deleteOrders);
