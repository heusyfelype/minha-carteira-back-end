import { Request, Response } from "express";
import { UserSignin, UserSignup } from "../Entities/User.js";
import {
  signupUserService,
  signinUserService,
} from "../service/authenticationService.js";

export async function signup(req: Request, res: Response) {
  const user: UserSignup = req.body;
  await signupUserService(user);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const user: UserSignin = req.body;
  let token = await signinUserService(user);
  if(token)
    token = "Bearer " + token;
  
  res.header({token}).sendStatus(202);
}
