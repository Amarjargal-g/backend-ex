import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getFoodById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foods = await prisma.foodCategory.findFirst({
    where: { id: Number(id) },
  });
  res.json(foods);
};
