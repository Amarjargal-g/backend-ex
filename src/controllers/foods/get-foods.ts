import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";
export const getFoods = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categories = await prisma.foodCategory.findFirst({
    where: { id: Number(id) },
  });
  res.json(categories);
};
