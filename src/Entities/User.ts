export interface User {
  username: string;
  email: string;
  password: string;
}

export interface UserSignup extends User {
  confirmPassword: string;
}
