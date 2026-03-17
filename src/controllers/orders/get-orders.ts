import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orders = await prisma.food.findMany();
  res.json({ orders });
};
