import { prisma } from "../../lib/prisma";
import { type Request, type Response } from "express";

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getUser = await prisma.user.findFirst({
    where: { id: Number(id) },
  });
  res.send({ getUser });
};
