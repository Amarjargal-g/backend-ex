import fs from "node:fs/promises";
export const getBooks = async () => {
  const books = await fs.readFile("./books.json", "utf-8");
  const parsedBooks = await JSON.parse(books);

  return parsedBooks;
};
