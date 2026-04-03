import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await prisma.foodCategory.findMany({
    include: {
      foods: true,
    },
  });
  res.json(categories);
};
