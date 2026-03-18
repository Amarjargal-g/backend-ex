import express, { Express } from "express";
import { addUser } from "../controllers/user/add-user";
import { getUser } from "../controllers/user/get-user";
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";
import { getUserById } from "../controllers/user/get-user-by-id";

export const userRouter = express.Router();

userRouter.post("/", addUser);
userRouter.get("/", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/:id", getUserById);
