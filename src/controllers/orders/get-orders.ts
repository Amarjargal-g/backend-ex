import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getOrders = async (_req: Request, res: Response) => {
  const orders = await prisma.foodOrder.findMany({
    include: {
      foodOrderItems: {
        include: {
          food: true,
        },
      },
    },
  });
  res.json({ orders });
};
