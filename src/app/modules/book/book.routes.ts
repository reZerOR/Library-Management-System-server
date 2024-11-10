import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router()
router.post('/', BookController.createBook)
router.get('/', BookController.allBook)
router.get('/:bookId', BookController.bookById)
router.put('/:bookId', BookController.updateBook)
router.delete('/:bookId', BookController.deleteBook)

export const BookRoutes = router