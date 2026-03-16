import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const updateFoods = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, foodCategoryId } = req.body;
    const updateCategory = await prisma.food.update({
      where: { id: Number(id) },
      data: { name, price, foodCategoryId },
    });
    res.status(200).json({ updateCategory });
  } catch (error) {
    res.status(500).json({ error });
  }
};
