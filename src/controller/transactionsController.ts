import { Request, Response } from "express";
import { Transaction, TransactionType } from "../Entities/Transaction.js";
import {
  getBalanceService,
  insertTransactionService,
} from "../service/transactionService.js";

export async function cashIn(req: Request, res: Response) {
  const { userId } = res.locals.userData.data;
  const transaction: Transaction = req.body;
  transaction.type = TransactionType.input;
  transaction.userId = userId;

  await insertTransactionService(transaction);
  res.sendStatus(201);
}

export async function cashOut(req: Request, res: Response) {
  const { userId } = res.locals.userData.data;
  const transaction: Transaction = req.body;
  transaction.type = TransactionType.output;
  transaction.userId = userId;
  await insertTransactionService(transaction);
  res.sendStatus(201);
}

export async function getBalance(req: Request, res: Response) {
  const { userId } = res.locals.userData.data;
  const balance = await getBalanceService(userId);

  return res.send({balance});
}
