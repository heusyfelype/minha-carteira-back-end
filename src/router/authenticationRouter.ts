import { Router } from "express";

import { signin, signup } from "../controller/authenticationController.js"
import { validSchemaMiddleware } from "../middlaware/validSchema.js";
import { signupSchema } from "../schema/authenticationSchema.js";

const authenticationRouter = Router();

authenticationRouter.post("/signin", signin);
authenticationRouter.post("/signup",validSchemaMiddleware(signupSchema), signup);

export default authenticationRouter;