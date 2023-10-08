
import { User } from "../Entities/User";
import { createUser, gettUserByEmail } from "../repository/authenticationRepository.js";
import { hashPassword } from "../utils";

export async function registerUserService(user: User) {
    const hasUser = await gettUserByEmail(user.email)
    if (hasUser) {
        throw { type: "conflict", message: "Email já cadastrado" }
    }
    user.password = hashPassword(user.password)
    const newUser: User = {...user}
    await createUser(newUser)
}
