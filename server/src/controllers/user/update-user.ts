import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, age, name } = req.body;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        email,
        password,
        age,
        name,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
