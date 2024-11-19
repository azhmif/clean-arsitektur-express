import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { formatResponse } from "../utils/response";
import { STATUS_CODES } from "../utils/statusCodes";

// Middleware untuk menangani error validasi
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .json(
        formatResponse(
          null,
          errors.array(),
          "Validation failed",
          STATUS_CODES.BAD_REQUEST
        )
      );
    return;
  }
  next(); // Lanjutkan ke middleware atau handler berikutnya
};
