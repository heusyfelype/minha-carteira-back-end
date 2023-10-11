import { Request, Response } from "express";
import { UserSignin, UserSignup } from "../Entities/User.js";
import {
  signupUserService,
  signinUserService,
} from "../service/authenticationService.js";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function signup(req: Request, res: Response) {
  const user: UserSignup = req.body;
  await signupUserService(user);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const user: UserSignin = req.body;
  console.log(user)
  let token = await signinUserService(user);
  if (token) res.status(202).send({...jwt.decode(token) as JwtPayload, token: token});
}

export async function isValidToken(req: Request, res: Response) {
  const { userId } = res.locals.userData.data;
  
  if (userId) res.status(202).send(true);
}