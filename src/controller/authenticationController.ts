import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

import db from "../config/dbConfig.js";
import { User } from "../Entities/User.js";

export async function signup(req: Request, res: Response) {
  const user: User = req.body;
  const password = user.password;

  const passwordHash = bcrypt.hashSync(password, 10);

  await db.collection("users").insertOne({ ...user, password: passwordHash });
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  // const { email, password } = req.body;
  // try {
  //   //const user = await db.collection("users").findOne({ email });
  //   if (user && bcrypt.compareSync(password, user.password)) {
  //     const token = uuid();
  //     //await db.collection("sessions").insertOne({
  //       userId: user._id,
  //       token,
  //     });
  //     res.send(token);
  //   } else {
  //     res.sendStatus(401);
  //   }
  // } catch (error) {
  //   res.send(error);
  // }
}
