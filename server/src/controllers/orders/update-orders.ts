import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";
import { Status } from "@prisma/client";

export const updateOrders = async (req: Request, res: Response) => {
  const orderId = Number(req.params.id);
  const rawStatus = String(req.body?.status ?? "").toUpperCase();
  const status = rawStatus === "CANCELLED" ? "CANCELED" : rawStatus;

  if (!orderId) {
    return res.status(400).json({ message: "Invalid order id" });
  }

  if (!Object.values(Status).includes(status as Status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  const updatedOrder = await prisma.foodOrder.update({
    where: { id: orderId },
    data: {
      status: status as Status,
    },
  });

  return res.json({ updatedOrder });
};
