import { Router } from "express";
import authenticationRouter from "./authenticationRouter.js";

const router = Router();

router.use(authenticationRouter)

export default router