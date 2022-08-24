import express from "express";
import * as validator from "express-validator";
import {
  createCar,
  deleteCar,
  editCar,
  getAllCars,
  getCar,
} from "../controllers/cars";
import { verifyToken } from "../middlewares/auth";
import { validate } from "../middlewares/validation";

const carRouter = express.Router();

carRouter.post(
  "/",
  verifyToken,
  validator.body("model").isString().bail().trim(),
  validator.body("make").isString().bail().trim(),
  validator.body("registrationNo").isString().bail().trim(),
  validator.body("color").isString().bail().trim(),
  validator.body("category").isString().bail().trim(),
  validator.body("year").optional().bail().isString().bail().trim(),
  validate,
  createCar
);

carRouter.get(
  "/",
  verifyToken,
  validator.query("limit").optional().bail().isInt().toInt(),
  validator.query("createdAt:lt").optional().bail().isISO8601().toDate(),
  validate,
  getAllCars
);

carRouter.get(
  "/:carId",
  verifyToken,
  validator.param("carId").isString(),
  validate,
  getCar
);

carRouter.put(
  "/:carId",
  verifyToken,
  validator.param("carId").isString(),
  validator.body("model").optional().bail().isString().bail().trim(),
  validator.body("make").optional().bail().isString().bail().trim(),
  validator.body("registrationNo").optional().bail().isString().bail().trim(),
  validator.body("color").optional().bail().isString().bail().trim(),
  validator.body("category").optional().bail().isString().bail().trim(),
  validator.body("year").optional().bail().isString().bail().trim(),
  validate,
  editCar
);

carRouter.delete(
  "/:carId",
  verifyToken,
  validator.param("carId").isString(),
  validate,
  deleteCar
);

export default carRouter;
