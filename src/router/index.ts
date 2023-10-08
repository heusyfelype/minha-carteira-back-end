import { Router } from "express";
import authenticationRouter from "./authenticationRouter.js";
import transactionsRouter from "./transactionsRouter.js";

const router = Router();

router.use(authenticationRouter);
router.use(transactionsRouter);

export default router;
