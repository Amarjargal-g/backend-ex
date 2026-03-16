import { prisma } from "../../lib/prisma";

type User = {
  email: string;
  age: number;
  password: string;
  name: string;
};

export const createUser = async ({ email, age, password, name }: User) => {
  try {
    const user = prisma.user.create({
      data: {
        email,
        age,
        password,
        name,
      },
    });
    return user;
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
