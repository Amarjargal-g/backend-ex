import fs from "node:fs/promises";

export const updatedBook = async () => {
  try {
    const newBook = 

    await fs.writeFile("books.json", JSON.stringify(content));
    return { message: "File created" };
  } catch (err) {
    throw new Error("Can not create file");
  }
};
