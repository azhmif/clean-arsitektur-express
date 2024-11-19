import { findUserByEmail, createUser } from "../repositories/authRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", {
    expiresIn: "1d",
  });

  return { user, token };
};

export const register = async (data: any) => {
  const user = await createUser(data);
  return user;
};
