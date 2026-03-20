import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const addFoods = async (req: Request, res: Response) => {
  const { name, price, categoryId } = req.body;

  try {
    const food = await prisma.food.create({
      data: {
        name,
        price,
        category: {
          connect: { id: Number(categoryId) },
        },
      },
    });
    res.status(200).json({ food });
  } catch (error) {
    res.status(500).json({ error });
  }
};
