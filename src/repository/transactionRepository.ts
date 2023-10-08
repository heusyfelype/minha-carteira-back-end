import db from "../config/dbConfig.js";
import { Transaction } from "../Entities/Transaction";

export async function registerTransaction(transaction: Transaction) {
  await db.collection<Transaction>("transactions").insertOne(transaction);
}

export async function getBalanceRepository(userId: string): Promise<Array<Transaction>> {
  return await db
    .collection<Transaction>("transactions")
    .find({ userId })
    .toArray();
}
