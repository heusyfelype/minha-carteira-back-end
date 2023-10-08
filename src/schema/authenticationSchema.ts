import Joi from "joi"
import { UserSignup } from "../Entities/User"

export const signupSchema = Joi.object<UserSignup>({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword:  Joi.string().valid(Joi.ref('password')).required()
})