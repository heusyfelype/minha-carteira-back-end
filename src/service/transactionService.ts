import { ObjectId } from "mongodb";
import { Balance } from "../Entities/Balance.js";
import { Transaction, TransactionType } from "../Entities/Transaction.js";
import {
  getBalanceRepository,
  registerTransaction,
  updateBalance,
} from "../repository/transactionRepository.js";

export async function insertTransactionService(transaction: Transaction) {
  transaction.createdAt = new Date();

  const balance: Balance = {
    userId: transaction.userId,
    updatedAt: transaction.createdAt,
    value: getAdjustedvalue(transaction.value, transaction.type),
  };

  await registerTransaction(transaction);
  await updateBalance(balance);
}

export async function getBalanceService(userId: ObjectId): Promise<number> {
  const balance = await getBalanceRepository(userId);
  return balance.value;
}

function getAdjustedvalue(
  value: number,
  typeTransaction: TransactionType
): number {
  switch (typeTransaction) {
    case TransactionType.input:
      return Math.abs(value);
    case TransactionType.output:
      return -Math.abs(value);
    default:
      throw {
        type: "bad request",
        message: "Deve ser informado se é entrada ou saída de dinheiro",
      };
  }
}
