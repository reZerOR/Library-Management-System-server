import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BorrowServices } from "./borrow.service";

const createBorrow = catchAsync(async (req, res) => {
  const result = await BorrowServices.createBorrow(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed succesfully",
    data: result,
  });
});
const retrunBook = catchAsync(async (req, res) => {
  await BorrowServices.retrunBook(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});
const overdueBooks = catchAsync(async (_req, res) => {
  const result = await BorrowServices.overdueBooks();
  sendResponse(res, {
    success: true,
    status: 200,
    message: result.length > 0 ?"Overdue borrow list fetched": "No overdue books",
    data: result,
  });
});

export const BorrowController = {
  createBorrow,
  retrunBook,
  overdueBooks,
};
