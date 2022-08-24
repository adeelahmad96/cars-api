import { Request, Response } from "express";
import {
  comparePassword,
  generatePassword,
  getToken,
  hashPassword
} from "../helpers/auth";
import { sendSignupEmail } from "../helpers/email";
import { UserModel } from "../models/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  const user = await UserModel.findOne({ email: req.body.email }).exec();
  if (!user || !comparePassword(req.body.password, user.password as string)) {
    res.status(401).send("Invalid Credentials");
  }
  // @ts-ignore
  const token = getToken(user.toJSON());
  res.status(201).send({ token });
};
export const signup = async (req: Request, res: Response): Promise<void> => {
  const user = await UserModel.findOne({ email: req.body.email }).exec();
  if (user) res.status(409).send("User Already Exists!");
  const password = generatePassword();
  req.body.password = hashPassword(password);
  const newUser = new UserModel(req.body);
  await newUser.save();
  // @ts-ignore
  const emailLink = await sendSignupEmail({ ...newUser.toJSON(), password });
  res.send({ user: newUser.toJSON(), emailLink });
};
