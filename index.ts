import express, { type Request, type Response } from "express";
import { createNewFile } from "./utils/create-new-file.js";
import { getBooks } from "./utils/get-books.js";
import { updatedBook } from "./utils/updated-book.js";

// type Task = {
//   id: number;
//   task: string;
//   isDone: boolean;
// };
// let tasks: Task[] = [];
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/student/:name", (req: Request, res: Response) => {
  const name = "Bat";
  res.send(`Сайн байна уу ${name}`);
});

app.get("/filter", (req: Request, res: Response) => {
  const { city, age } = req.query;

  res.send({ city: city, age: age });
});

app.post("/create", async (req: Request, res: Response) => {
  try {
    const result = await createNewFile();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.get("/books", async (req: Request, res: Response) => {
  const books = await getBooks();
  res.status(200).json({ message: "Success", data: books });
});

app.put("/update", async (req: Request, res: Response) => {
  const updatedBoos = await updatedBook();
});

// app.post("/add-todo", (req: Request, res: Response) => {
//   const { task } = req.body as { task: string };
//   const newTaskId = tasks.length + 1;
//   const newTask: Task = { id: newTaskId, task, isDone: false };

//   tasks.push(newTask);
//   res.status(201).send(newTask);
// });

// app.put("/update-todo/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { task, isDone } = req.body as Partial<Pick<Task, "task" | "isDone">>;

//   const taskId = Number(id);
//   const existing = tasks.find((t) => t.id === taskId);
//   if (!existing) {
//     return res.status(404).send({ error: "Task not found" });
//   }

//   if (typeof task === "string") existing.task = task;
//   if (typeof isDone === "boolean") existing.isDone = isDone;

//   res.send(existing);
// });

// app.delete("/delete-todo/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const foundTask = tasks.map((task) => String(task.id) === id);

//   if (!foundTask) {
//     res.status(404).send("not found");
//   }
//   const filtertask = tasks.filter((task) => String(task.id) !== id);
//   tasks = filtertask;
//   res.status(200).send({ massage: "Success", tasks });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
