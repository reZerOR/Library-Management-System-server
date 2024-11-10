import { Router } from "express";
import { BorrowController } from "./borrow.controller";

export const borrowRouter = Router()
export const returnRouter = Router()


borrowRouter.post('/', BorrowController.createBorrow)
borrowRouter.get('/overdue', BorrowController.overdueBooks)
returnRouter.post('/', BorrowController.retrunBook)