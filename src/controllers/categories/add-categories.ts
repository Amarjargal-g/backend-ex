import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";
export const addCategories = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const category = await prisma.foodCategory.create({
      data: { name },
    });
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ error });
  }
};
