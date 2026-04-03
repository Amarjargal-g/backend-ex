import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../../lib/prisma";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) return res.status(404).send({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch === true) {
    const accessToken = jwt.sign(
      {
        data: {
          userId: user.id,
          email: user.email,
          role: user.role,
        },
      },
      JWT_SECRET!,
      { expiresIn: "1h" },
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(400).json({ message: "invalid" });
  }
};
