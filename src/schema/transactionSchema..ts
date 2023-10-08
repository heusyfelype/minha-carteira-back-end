import Joi from "joi"
import { UserSignin, UserSignup } from "../Entities/User"
import { Transaction } from "../Entities/Transaction"

export const transactionSchema = Joi.object<Transaction>({
    value: Joi.number().integer().min(1).required()
})

