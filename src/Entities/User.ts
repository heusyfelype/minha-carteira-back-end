import { ObjectId } from "mongodb";

export interface User {
  username: string;
  email: string;
  password: string;
}

export default class UserDB implements User {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
}

export interface UserSignup extends User {
  confirmPassword: string;
}

export interface UserSignin {
  email: string;
  password: string;
}
