import { Express } from "express-serve-static-core";
import authRouter from "./auth";
import categoryRouter from "./category";
import carRouter from "./car";
/**
 *
 * @param app
 */
export const api = (app: Express) => {
  app.use("/api/auth", authRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/cars", carRouter);
};
