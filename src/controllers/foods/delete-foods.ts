import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const deleteFoods = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.food.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};
