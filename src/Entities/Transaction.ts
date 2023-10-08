export interface Transaction {
  userId: string;
  value: number;
  createdAt: Date;
  type: TransactionType;
}

export enum TransactionType {
  input,
  output,
}
