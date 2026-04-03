import express, { type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/users", async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

app.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });
  res.json({ user });
});

app.post("/users", async (req: Request, res: Response) => {
  const { email, age, password, name } = req.body as {
    email?: unknown;
    age?: unknown;
    password?: unknown;
    name?: unknown;
  };

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof age !== "number" ||
    typeof name !== "string"
  ) {
    return res.status(400).json({
      error:
        "email (string), password (string), name (string) and age (number) are required",
    });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        age,
      },
    });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.put("/users/:id", async (req: Request, res: Response) => {
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
});

app.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/categories", async (req: Request, res: Response) => {
  const categories = await prisma.foodCategory.findMany({
    include: { foods: true },
  });
  res.json(categories);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
