import { ObjectId } from "mongodb";

export interface Transaction {
  userId: ObjectId;
  value: number;
  createdAt: Date;
  type: TransactionType;
  description: String;
}

export enum TransactionType {
  input,
  output,
}
