import bcrypt from "bcryptjs";
import passwordGenerator from "generate-password";
import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "../models/user";

const saltRounds = 10;

export const getToken = (user: User) => {
  return jwt.sign(user, config.TOKEN_SECRET, { expiresIn: "7d" });
};

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (
  password: string,
  hashPassword: string
): boolean => {
  return bcrypt.compareSync(password, hashPassword);
};

export const generatePassword = () => {
  return passwordGenerator.generate({ length: 10, numbers: true });
};
