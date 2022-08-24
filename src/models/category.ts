import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: { updatedAt: true, createdAt: true },
  },
})
export class Category {
  updatedAt?: Date;
  createdAt?: Date;
  _id: Types.ObjectId;

  @prop({ required: true, type: () => String })
  public name: string;
}

export const CategoryModel = getModelForClass(Category);
