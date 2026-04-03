import { prisma } from "../../lib/prisma";
import express, { type Request, type Response } from "express";

type User = {
  email: string;
  age: number;
  password: string;
  name: string;
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });
  res.json({ user });
};
