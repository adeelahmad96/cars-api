import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { Types } from "mongoose";
import { Category } from "./category";

@modelOptions({
  schemaOptions: {
    timestamps: { updatedAt: true, createdAt: true },
  },
})
export class Car {
  updatedAt?: Date;
  createdAt?: Date;
  _id: Types.ObjectId;

  @prop({ required: true, type: () => String })
  public model: string;

  @prop({ required: true, type: () => String })
  public make: string;

  @prop({ required: true, type: () => String })
  public registrationNo: string;

  @prop({ required: true, type: () => String })
  public color: string;

  @prop({ required: true, ref: "Category" })
  public category: Ref<Category>;

  @prop({ required: false, type: () => String })
  public year: string;
}

export const CarModel = getModelForClass(Car);
