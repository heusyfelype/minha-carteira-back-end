import { ObjectId } from "mongodb";
import { Balance } from "../Entities/Balance";
import { User, UserSignin, UserSignup } from "../Entities/User";
import {
  createUser,
  getUserByEmail,
} from "../repository/authenticationRepository.js";
import {
  comparehashedWithNoHashedPassword,
  hashPassword,
} from "../utils/index.js";
import jwt from "jsonwebtoken";
import { createBalance } from "../repository/transactionRepository.js";

export async function signupUserService(user: UserSignup) {
  const hasUser = await getUserByEmail(user.email);
  if (hasUser) {
    throw { type: "conflict", message: "Email já cadastrado" };
  }
  user.password = hashPassword(user.password);
  const newUser: User = { ...user };
  const userCreated = await createUser(newUser);
  const balance: Balance = {
    userId: new ObjectId(userCreated.insertedId),
    value: 0,
    updatedAt: new Date(),
  };
  await createBalance(balance);
}

export async function signinUserService(user: UserSignin): Promise<string> {
  const hasUser = await getUserByEmail(user.email);
  if (
    !hasUser ||
    !comparehashedWithNoHashedPassword(user.password, hasUser.password)
  ) {
    throw { type: "unauthorized", message: "Email ou senha incorretos!" };
  }

  const expireConfig = { expiresIn: +process.env.EXPIRES_JWT_TOKEN };

  return jwt.sign(
    { data: { userId: hasUser._id } },
    process.env.JWT_SECRET,
    expireConfig
  );
}
