import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const updateCategories = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateCategory = await prisma.foodCategory.update({
      where: { id: Number(id) },
      data: { name: name },
    });
    res.status(200).json({ updateCategory });
  } catch (error) {
    res.status(500).json({ error });
  }
};
