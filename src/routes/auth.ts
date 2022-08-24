import express from "express";
import * as validator from "express-validator";
import { login, signup } from "../controllers/auth";
import { validate } from "../middlewares/validation";

const authRouter = express.Router();

authRouter.post(
  "/login",
  validator.body("password").isString().bail().trim(),
  validator.body("email").isEmail().bail().trim(),
  validate,
  login
);

authRouter.post(
  "/signup",
  validator
    .body("firstName", "firstName does not exist")
    .isString()
    .bail()
    .trim(),
  validator.body("lastName").optional().isString().bail().trim(),
  validator
    .body("password", "password does not exist")
    .isString()
    .bail()
    .trim(),
  validator.body("email").isEmail().bail().trim(),
  validate,
  signup
);

export default authRouter;
