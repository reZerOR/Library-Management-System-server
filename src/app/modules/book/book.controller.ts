import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBook(req.body);
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
  const {bookId} = req.params
  const result = await BookServices.bookById(bookId as string);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});
const updateBook = catchAsync(async (req, res) => {
  const {bookId} = req.params
  const result = await BookServices.updateBook(bookId as string, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});
const deleteBook = catchAsync(async (req, res) => {
  const {bookId} = req.params
  await BookServices.deleteBook(bookId as string);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
});

export const BookController = {
  createBook,
  allBook,
  bookById,
  updateBook,
  deleteBook,
};
