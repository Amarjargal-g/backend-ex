import fs from "node:fs/promises";

export const createNewFile = async () => {
  try {
    const content = [
      {
        id: 1,
        title: "Harry Potter",
        author: "JK Rowling",
      },
    ];
    await fs.writeFile("books.json", JSON.stringify(content));
    return { message: "File created" };
  } catch (err) {
    throw new Error("Can not create file");
  }
};
