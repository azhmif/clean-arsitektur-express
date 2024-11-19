import { Request, Response } from "express";
import { login, register } from "../usecases/authUseCase";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await login(email, password);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = await register(req.body);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
