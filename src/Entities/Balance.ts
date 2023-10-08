import { ObjectId } from "mongodb";

export interface Balance {
  userId: ObjectId;
  value: number;
  updatedAt: Date;
}
