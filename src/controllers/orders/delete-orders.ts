import { Status } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const deleteOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteOrder = await prisma.foodOrder.delete({
    where: { id: 2 },
    // data: { status: Status.CANCELED },
  });
  res.json({ deleteOrder });
};
