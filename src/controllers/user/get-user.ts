import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });
  res.json({ user });
};
