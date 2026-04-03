import express, { Express } from "express";
import { createUser } from "../controllers/user/create-user";
import { getUser } from "../controllers/user/get-user";
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";

export const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
