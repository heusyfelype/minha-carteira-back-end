import { Transaction, TransactionType } from "../Entities/Transaction.js";
import {
  getBalanceRepository,
  registerTransaction,
} from "../repository/transactionRepository.js";

export async function insertTransactionService(transaction: Transaction) {
  transaction.createdAt = new Date();
  await registerTransaction(transaction);
}

export async function getBalanceService(userId: string): Promise<number> {
  const alltransactions = await getBalanceRepository(userId);

  const total: number = alltransactions.reduce((acumulator, object) => {
    if (object.type === TransactionType.input) return acumulator + object.value;
    if (object.type === TransactionType.output)
      return acumulator - object.value;
  }, 0);

  return total;
}
