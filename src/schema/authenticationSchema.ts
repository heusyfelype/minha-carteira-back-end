import Joi from "joi"
import { UserSignin, UserSignup } from "../Entities/User"

export const signupSchema = Joi.object<UserSignup>({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,15}$')).required(),
    confirmPassword:  Joi.string().valid(Joi.ref('password')).required()
})

export const signinSchema = Joi.object<UserSignin>({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,15}$')).required()
})