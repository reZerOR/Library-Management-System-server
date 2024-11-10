import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (_req, res) => {
  const result = await BookServices.createBook();
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});
const allBook = catchAsync(async (_req, res) => {
  const result = await BookServices.allBook();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});
const bookById = catchAsync(async (req, res) => {
  const result = await BookServices.bookById();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});
const updateBook = catchAsync(async (req, res) => {
  const result = await BookServices.updateBook();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});
const deleteBook = catchAsync(async (req, res) => {
  const result = await BookServices.deleteBook();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book created successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
  allBook,
  bookById,
  updateBook,
  deleteBook,
};
