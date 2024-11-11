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

const allBook = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const bookById = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  return result;
};

const updateBook = async (bookId: string, payload: TBookBody) => {
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });
  return result;
};

const deleteBook = async (bookId: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  allBook,
  bookById,
  updateBook,
  deleteBook,
};
