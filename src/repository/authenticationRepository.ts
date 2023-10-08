import { WithId } from "mongodb";
import { User, UserSignup } from "../Entities/User";
import db from "../config/dbConfig.js";

export async function getUserByEmail(email: string): Promise< WithId<User> | null>{
  const user = await db.collection<User>("users").findOne({ email });
  return user;
}

export async function createUser(user: User) {
  await db.collection("users").insertOne({ ...user });
}
