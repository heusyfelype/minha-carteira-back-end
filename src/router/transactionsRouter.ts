import { Router } from "express";

import { validSchemaMiddleware } from "../middlaware/validSchema.js";
import { validToken } from "../middlaware/validToken.js";
import { transactionSchema } from "../schema/transactionSchema..js";
import { cashIn, cashOut, getBalance, getTransactionsList } from "../controller/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.get("/balance", validToken, getBalance)
transactionsRouter.get("/transactions", validToken, getTransactionsList)
transactionsRouter.post("/transactions/cashin", validToken, validSchemaMiddleware(transactionSchema), cashIn);
transactionsRouter.post("/transactions/cashout", validToken, validSchemaMiddleware(transactionSchema), cashOut);

export default transactionsRouter;