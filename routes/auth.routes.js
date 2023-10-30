import  Express  from "express";
import { register, login } from "../controllers/authcontrol.js";
const authRouter=Express()

authRouter.post('/register', register)
authRouter.post('/login', login)

export default authRouter