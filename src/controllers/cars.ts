import { Request, Response } from "express";
import { Car, CarModel } from "../models/cars";

export const createCar = async (req: Request, res: Response): Promise<void> => {
  const car = new CarModel(req.body);
  await car.save();
  res.status(201).send(car.toJSON());
};

export const getAllCars = async (
  req: Request,
  res: Response
): Promise<void> => {
  const limit: number = (req.query.limit as unknown as number) ?? 10;
  const createdAt$lt = req.query["createdAt:lt"] ?? new Date();
  // get newly added car first
  const cars = await CarModel.find({ createdAt: { $lt: createdAt$lt } })
    .lean()
    .sort({ createdAt: -1 })
    .limit(limit);
  res.send(cars);
};

export const getCar = async (req: Request, res: Response): Promise<void> => {
  const carId: string = req.params.carId;
  const car = await CarModel.findById(carId).lean();
  res.send(car);
};

export const editCar = async (req: Request, res: Response): Promise<void> => {
  const update: Partial<Car> = req.body;
  const carId: string = req.params.carId;
  const car = await CarModel.findOneAndUpdate({ _id: carId }, update, {
    new: true,
  }).lean();
  res.send(car);
};

export const deleteCar = async (req: Request, res: Response): Promise<void> => {
  const carId: string = req.params.carId;
  await CarModel.deleteOne({ _id: carId });
  res.send();
};
