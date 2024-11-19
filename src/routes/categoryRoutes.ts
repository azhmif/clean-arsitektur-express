import express from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
} from "../controllers/categoryController";
import { authenticate } from "../middlewares/authMiddleware";
import {
  validateCreateCategory,
  validateUpdateCategory,
} from "../validators/categoryValidator";
import { handleValidationErrors } from "../middlewares/handleValidationErrors";

const router = express.Router();

// Route to get all categories (protected)
router.get("/", authenticate, getCategories);

// Route to create a category (protected)
router.post(
  "/",
  authenticate,
  validateCreateCategory,
  handleValidationErrors,
  createCategory
);
router.put(
  "/",
  authenticate,
  validateUpdateCategory,
  handleValidationErrors,
  updateCategory
);
export default router;
