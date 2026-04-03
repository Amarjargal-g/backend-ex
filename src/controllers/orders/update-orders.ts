import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const updateOrders = async (_req: Request, res: Response) => {
  const order = await prisma.foodOrder.create({
    data: {
      status: "pending",
      totalPrice: "100",
    },
  });
  res.send({ order });
};
