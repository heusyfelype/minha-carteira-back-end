import { ObjectId, WithId } from "mongodb";
import db from "../config/dbConfig.js";
import { Balance } from "../Entities/Balance.js";
import { Transaction } from "../Entities/Transaction";
import { error } from "console";

export async function registerTransaction(transaction: Transaction) {
  await db.collection<Transaction>("transactions").insertOne(transaction);
}

export async function getBalanceRepository(
  userId: ObjectId
): Promise<WithId<Transaction>> {
  return await db.collection<Transaction>("balance").findOne({ userId });
}

export async function updateBalance(balance: Balance) {
  await db.collection("balance").updateOne(
    { userId: balance.userId },
    {
      $set: { updatedAt: balance.updatedAt },
      $inc: { value: balance.value },
    },
    { upsert: true }
  );
}

export async function createBalance(balance: Balance) {
  await db.collection("balance").insertOne(balance);
}
