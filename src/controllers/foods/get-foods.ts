import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getFoods = async (_req: Request, res: Response) => {
  try {
    const foods = await prisma.food.findMany({});
    if (!foods || foods.length === 0) {
      res.status(404).json({ message: "Not found", foods: [] });
    }

    res.status(200).json({ message: "Success", foods: foods });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Something went wrong: ${err}`);
    }
  }
};
