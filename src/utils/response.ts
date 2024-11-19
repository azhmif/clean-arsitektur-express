import { validationResult, ValidationError } from "express-validator";

export const formatResponse = (
  data: any,
  errors: ValidationError[] | null = null, // Tambahkan tipe
  message = "Success",
  statusCode = 200
) => ({
  statusCode,
  message,
  data,
  errors,
});
