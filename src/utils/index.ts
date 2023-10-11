import bcrypt, { hash } from "bcrypt";

export const hashPassword = (pass: string) => bcrypt.hashSync(pass, 10);
export const comparehashedWithNoHashedPassword = (pass: string, hashedPass: string) => {console.log ("pass", pass, "hash: ", hashedPass); return bcrypt.compareSync(pass, hashedPass)}
