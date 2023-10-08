import { Router } from "express";

import { validSchemaMiddleware } from "../middlaware/validSchema.js";
import { validToken } from "../middlaware/validToken.js";
import { transactionSchema } from "../schema/transactionSchema..js";
import { cashIn, cashOut, getBalance } from "../controller/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.get("/transactions", validToken, getBalance)
transactionsRouter.post("/transactions/cash-in", validToken, validSchemaMiddleware(transactionSchema), cashIn);
transactionsRouter.post("/transactions/cash-out", validToken, validSchemaMiddleware(transactionSchema), cashOut);

export default transactionsRouter;