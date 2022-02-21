// ./routes/books.ts

import { Router, Request, Response } from "express";
import fs from 'fs/promises';
import Book from "../interfaces/Book";
import { read, write } from "../functions";
import validationBook from "../middlewares/validationBook";
import StatusCode from "../enums/StatusCode";

const router = Router();
const NotFoundMessage = "Livro não encontrado."

router.get("/books", async (req: Request, res: Response) => {
  const data = await fs.readFile("./books.json", "utf8");

  const books: Book[] = JSON.parse(data);

  return res.status(200).json(books);
});


router.get("/books/:isbn", async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const data = await fs.readFile("./books.json", "utf8");

  const books: Book[] = JSON.parse(data);

  const book = books.find(book => book.isbn === isbn);

  if (!book) return res.status(404).send(NotFoundMessage);

  return res.status(200).json(book);
});


router.post("/books", validationBook, async (req: Request, res: Response) => {

  const book: Book = req.body;

  const books = await read();

  books.push(book);

  await write(books);

  return res.status(StatusCode.CREATED).json(book);
});


router.put("/books/:isbn", validationBook, async (req: Request, res: Response) => {

  const { isbn } = req.params;

  const editedBook: Book = req.body;

  const books = await read();

  const index = books.findIndex(book => book.isbn === isbn);

  if (index === -1) return res.status(StatusCode.NOT_FOUND).send(NotFoundMessage);

  books.splice(index, 1, editedBook);

  await write(books);

  return res.status(StatusCode.OK).json(editedBook);
});

router.delete("/books/:isbn", async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const books = await read();

  const index = books.findIndex(book => book.isbn === isbn);

  if (index === -1) return res.status(StatusCode.NOT_FOUND).send(NotFoundMessage);

  books.slice(index, 1);

  await write(books);

  return res.status(StatusCode.NO_CONTENT).send();
});

export default router;