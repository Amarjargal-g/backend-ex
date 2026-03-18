import { hash } from "crypto";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

type User = {
  email: string;
  age: number;
  password: string;
  name: string;
};

export const addUser = async ({ email, age, password, name }: User) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = prisma.user.create({
      data: {
        email,
        age,
        password: hashedPassword,
        name,
      },
    });
    return user;
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
