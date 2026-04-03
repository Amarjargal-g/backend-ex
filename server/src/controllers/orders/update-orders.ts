import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const updateOrders = async (_req: Request, res: Response) => {
  const updatedOrder = await prisma.foodOrder.update({
    where: { id: 2 },
    data: {
      status: "DELIVERED",
    },
  });
  res.json({ updatedOrder });
};
