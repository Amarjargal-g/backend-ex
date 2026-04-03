import express from "express";
import { addUser } from "../controllers/user/add-user";
import { getUser } from "../controllers/user/get-user";
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";
import { getUserById } from "../controllers/user/get-user-by-id";
import { Login } from "../controllers/user/auth/login";
import { authMiddleware } from "../controllers/auth/authMiddleware";
import { me } from "../controllers/user/me";

export const userRouter = express.Router();

userRouter.post("/", addUser);
userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/:id", getUserById);
userRouter.post("/login", Login);
userRouter.get("/auth/me", authMiddleware, me);
