import bcrypt from "bcrypt";

export const hashPassword = (pass: string) => bcrypt.hashSync(pass, 10);
