import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

export const addUser = async (req: Request, res: Response) => {
  const { email, age, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        age,
        password: hashedPassword,
        name,
      },
    });
    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: `Something happened ${err}`,
    });
  }
};
