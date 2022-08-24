import express from "express";
import * as validator from "express-validator";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
  getCategory
} from "../controllers/category";
import { verifyToken } from "../middlewares/auth";
import { validate } from "../middlewares/validation";

const categoryRouter = express.Router();

categoryRouter.post(
  "/",
  verifyToken,
  validator.body("name").isString().bail().trim(),
  validate,
  createCategory
);

categoryRouter.get(
  "/",
  verifyToken,
  validator.query("limit").optional().bail().isInt().toInt(),
  validator.query("name:gt").optional().bail().isString(),
  validate,
  getAllCategories
);

categoryRouter.get(
  "/:categoryId",
  verifyToken,
  validator.param("categoryId").isString(),
  validate,
  getCategory
);

categoryRouter.put(
  "/:categoryId",
  verifyToken,
  validator.param("categoryId").isString(),
  validator.body("name").optional().bail().isString(),
  validate,
  editCategory
);

categoryRouter.delete(
  "/:categoryId",
  verifyToken,
  validator.param("categoryId").isString(),
  validate,
  deleteCategory
);

export default categoryRouter;
