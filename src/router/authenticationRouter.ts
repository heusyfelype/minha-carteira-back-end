import { Router } from "express";

import { signin, signup } from "../controller/authenticationController.js"
import { validSchemaMiddleware } from "../middlaware/validSchema.js";
import { signinSchema, signupSchema } from "../schema/authenticationSchema.js";

const authenticationRouter = Router();

authenticationRouter.post("/signin", validSchemaMiddleware(signinSchema), signin);
authenticationRouter.post("/signup", validSchemaMiddleware(signupSchema), signup);

export default authenticationRouter;