import { InsertOneResult, WithId } from "mongodb";
import UserDB, { User } from "../Entities/User";
import db from "../config/dbConfig.js";

export async function getUserByEmail(
  email: string
): Promise<WithId<User> | null> {
  const user = await db.collection<User>("users").findOne({ email });
  return user;
}

export async function createUser(user: User): Promise<InsertOneResult<UserDB>> {
  return await db.collection<User>("users").insertOne({ ...user });
}
