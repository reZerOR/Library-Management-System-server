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
  const result = await BorrowServices.retrunBook();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book returned successfully",
    data: result,
  });
});
const overdueBooks = catchAsync(async (req, res) => {
  const result = await BorrowServices.overdueBooks();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Overdue borrow list fetched",
    data: result,
  });
});

export const BorrowController = {
    createBorrow,
    retrunBook,
    overdueBooks
}