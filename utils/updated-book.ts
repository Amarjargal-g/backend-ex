import fs from "node:fs/promises";

export const updatedBook = async () => {
  try {
    const newBook = {
      id: Date.now(),
      title: "Untitled",
      author: "Unknown",
    };

    await fs.writeFile("books.json", JSON.stringify(newBook, null, 2));
    return { message: "File created" };
  } catch (err) {
    throw new Error("Can not create file");
  }
};
