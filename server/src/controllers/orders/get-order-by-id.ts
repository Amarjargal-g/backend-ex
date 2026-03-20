import { prisma } from "../../lib/prisma";
import express, { type Request, type Response } from "express";

export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orders = await prisma.food.findFirst({
    where: {
      id: Number(id),
    },
  });
  res.json({ orders });
};
