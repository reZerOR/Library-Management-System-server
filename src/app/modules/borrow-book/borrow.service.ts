import { BorrowRecord } from "@prisma/client";
import prisma from "../../utils/prismaClient";

interface TBorrowBody extends Pick<BorrowRecord, "bookId" | "memberId"> {}
const createBorrow = async (payload: TBorrowBody) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload.bookId,
    },
  });
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload.memberId,
    },
  });
  const result = await prisma.borrowRecord.create({
    data: payload,
  });
  return result;
};
const retrunBook = () => {
  return "";
};
const overdueBooks = () => {
  return "";
};

export const BorrowServices = {
  createBorrow,
  retrunBook,
  overdueBooks,
};
