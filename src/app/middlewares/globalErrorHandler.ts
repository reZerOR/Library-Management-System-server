import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof PrismaClientKnownRequestError) {
    const isDuplicateError = !!err.meta?.target;
    const isForeignKeyError = !!err.meta?.field_name;
    const status = isDuplicateError || isForeignKeyError ? 409 : 404;

    return res.status(status).json({
      success: false,
      status,
      message: isDuplicateError
        ? `Duplicate Entry ${(err.meta?.target as Array<string>).join(", ")}`
        : isForeignKeyError
        ? "Cannot delete this record as it is referenced by another record."
        : err.meta?.cause,
    });
  }
  if (err instanceof PrismaClientValidationError) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: `Invalid fields`,
    });
  }
  if (err instanceof Error) {
    return res.status(404).json({
      success: false,
      status: 404,
      message: err.message,
    });
  }
  return res.status(500).json({
    success: false,
    status: 500,
    message: err.name || "Something went wrong!",
  });
};

export default globalErrorHandler;
