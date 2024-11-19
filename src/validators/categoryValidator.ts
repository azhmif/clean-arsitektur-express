import { body } from "express-validator";

export const validateCreateCategory = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
];

export const validateUpdateCategory = [
  body("id")
    .notEmpty()
    .withMessage("Category ID is required")
    .isUUID()
    .withMessage("Invalid Category ID format"),
  body("name").optional().isString().withMessage("Name must be a string"),
];
