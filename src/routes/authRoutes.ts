import express from "express";
import { loginUser, registerUser } from "../controllers/authController";
import { validateLogin, validateRegister } from "../validators/authValidator";
import { handleValidationErrors } from "../middlewares/handleValidationErrors";

const router = express.Router();

router.post('/register', validateRegister, handleValidationErrors, registerUser);

// Route untuk Login
router.post('/login', validateLogin, handleValidationErrors, loginUser);

export default router;
