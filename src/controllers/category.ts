import { Request, Response } from "express";
import { Category, CategoryModel } from "../models/category";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const category = new CategoryModel(req.body);
  await category.save();
  res.status(201).send(category.toJSON());
};

export const getAllCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  const limit: number = (req.query.limit as unknown as number) ?? 10;
  const name$gt = req.query["name:gt"] ?? "A";
  const categories = await CategoryModel.find({ name: { $gt: name$gt } })
    .sort({ name: 1 })
    .limit(limit);
  res.send(categories);
};

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryId: string = req.params.categoryId;
  const category = await CategoryModel.findById(categoryId).exec();
  res.send(category);
};

export const editCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const update: Partial<Category> = req.body;
  const categoryId: string = req.params.categoryId;
  const category = await CategoryModel.findOneAndUpdate(
    { _id: categoryId },
    update,
    { new: true }
  );
  res.send(category);
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const categoryId: string = req.params.categoryId;
  await CategoryModel.deleteOne({ _id: categoryId });
  res.send();
};
