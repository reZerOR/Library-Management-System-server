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
    select: {
        bookId: true,
        memberId:true,
        borrowDate: true,
        borrowId: true
    }
  });
  return result;
};
const retrunBook = async(payload: {borrowId: string}) => {
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId: payload.borrowId
        },
        data: {
            returnDate: new Date()
        }
    })
  return result;
};
const overdueBooks = () => {
  return "";
};

export const BorrowServices = {
  createBorrow,
  retrunBook,
  overdueBooks,
};
