import { Book } from "@prisma/client";
import prisma from "../../utils/prismaClient";

interface TBookBody
  extends Pick<
    Book,
    "title" | "genre" | "publishedYear" | "availableCopies" | "totalCopies"
  > {}

const createBook = async (payload: TBookBody) => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

const allBook = () => {
  return "";
};

const bookById = () => {
  return "";
};

const updateBook = () => {
  return "";
};

const deleteBook = () => {
  return "";
};

export const BookServices = {
  createBook,
  allBook,
  bookById,
  updateBook,
  deleteBook,
};
