import { prisma } from "../../lib/prisma";
import express, { type Request, type Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        ...(req.body.email !== undefined && { email: req.body.email }),
        ...(req.body.password !== undefined && { password: req.body.password }),
        ...(req.body.age !== undefined && { age: req.body.age }),
        ...(req.body.name !== undefined && { name: req.body.name }),
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};
