import { User } from "../Entities/User";
import db from "../config/dbConfig";
export async function gettUserByEmail(email: string) {
  const user = await db.collection("users").find({ email });
  console.log("User: ", user)
  return user;
}

export async function createUser(user: Omit<User, "confirmPassword">) {
  await db.collection("users").insertOne({ ...user });
}
