import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getMyOrders = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const orders = await prisma.foodOrder.findMany({
    where: { userId },
    include: {
      user: {
        select: {
          email: true,
        },
      },
      foodOrderItems: {
        include: {
          food: true,
        },
      },
    },
  });

  return res.json({ orders });
};
