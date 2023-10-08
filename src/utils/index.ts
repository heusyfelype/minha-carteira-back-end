import bcrypt from "bcrypt";

export const hashPassword = (pass: string) => bcrypt.hashSync(pass, 10);
export const comparehashedWithNoHashedPassword = (pass: string, hashedPass: string) => bcrypt.compareSync(pass, hashedPass)
