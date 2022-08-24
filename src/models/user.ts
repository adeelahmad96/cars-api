import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: { updatedAt: true, createdAt: true },
    toJSON: {
      transform: (user: User, ret: User) => {
        // remove password while fetching user
        delete ret.password;
      },
    },
  },
})
export class User {
  updatedAt?: Date;
  createdAt?: Date;
  _id: Types.ObjectId;

  @prop({ required: true, type: () => String })
  public email: string;

  @prop({ required: true, type: () => String })
  public password?: string;

  @prop({ required: true, type: () => String })
  public firstName: string;

  @prop({ required: false, type: () => String })
  public lastName: string;
}

export const UserModel = getModelForClass(User);
