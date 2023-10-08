import { User, UserSignin, UserSignup } from "../Entities/User";
import {
  createUser,
  getUserByEmail,
} from "../repository/authenticationRepository.js";
import { comparehashedWithNoHashedPassword, hashPassword } from "../utils/index.js";
import bcrypt, { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

export async function signiupUserService(user: UserSignup) {
  const hasUser = await getUserByEmail(user.email);
  console.log("USER SIGNUP: ", user)
  if (hasUser) {
    throw { type: "conflict", message: "Email já cadastrado" };
  }
  user.password = hashPassword(user.password);
  const newUser: User = { ...user };
  await createUser(newUser);
}

export async function signinUserService(user: UserSignin): Promise<string> {
  const hasUser = await getUserByEmail(user.email);
  if (!hasUser || !comparehashedWithNoHashedPassword(user.password, hasUser.password)) {
    throw { type: "unauthorized", message: "Email ou senha incorretos!" };
  }

  const expireConfig = { expiresIn: +process.env.EXPIRES_JWT_TOKEN };

  console.log("expireConfig: ", expireConfig)

  return jwt.sign(
    { data: { userId: hasUser._id } },
    process.env.JWT_SECRET,
    expireConfig
  );
}
