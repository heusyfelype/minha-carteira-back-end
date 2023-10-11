import { Router } from "express";

import { isValidToken, signin, signup } from "../controller/authenticationController.js"
import { validSchemaMiddleware } from "../middlaware/validSchema.js";
import { signinSchema, signupSchema } from "../schema/authenticationSchema.js";
import { validToken } from "../middlaware/validToken.js";

const authenticationRouter = Router();

authenticationRouter.post("/signin", validSchemaMiddleware(signinSchema), signin);
authenticationRouter.post("/signup", validSchemaMiddleware(signupSchema), signup);
authenticationRouter.get("/auth", validToken, isValidToken);

export default authenticationRouter;