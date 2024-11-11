import { BorrowRecord } from "@prisma/client";
import prisma from "../../utils/prismaClient";

interface TBorrowBody extends Pick<BorrowRecord, "bookId" | "memberId"> {}
const createBorrow = async (payload: TBorrowBody) => {
 const isBookExists =  await prisma.book.findUnique({
    where: {
      bookId: payload.bookId,
    },
  });
  if(!isBookExists){
    throw new Error("Book not found")
  }
  const isMemberExists = await prisma.member.findUnique({
    where: {
      memberId: payload.memberId,
    },
  });
  if(!isMemberExists){
    throw new Error("Member not found")
  }
  const result = await prisma.borrowRecord.create({
    data: payload,
    select: {
      bookId: true,
      memberId: true,
      borrowDate: true,
      borrowId: true,
    },
  });
  return result;
};
const retrunBook = async (payload: { borrowId: string }) => {
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: payload.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};
const overdueBooks = async () => {
  const fourteenDaysAgo = new Date().getTime() - 14 * 24 * 60 * 60 * 1000;
  const result = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: { lte: new Date(fourteenDaysAgo) },
      returnDate: null,
    },
    include: {
      book: {
        select: { title: true },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  if(result.length > 0) {
    const formateData = result.map(data => {
        const duedate = new Date(data.borrowDate.getTime() + 14 * 24 * 60 * 60 * 1000)
        const overdueDays = Math.floor((new Date().getTime() - duedate.getTime())/(24 * 60 * 60 * 1000))
        return {
            borrowId: data.borrowId,
            bookTitle: data.book.title,
            borrowerName: data.member.name,
            overdueDays
        }
    })
    return formateData
  }
  return result;
};

export const BorrowServices = {
  createBorrow,
  retrunBook,
  overdueBooks,
};
