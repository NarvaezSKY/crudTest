import  Express  from "express";
import { register, login, getAllUsers, logout, profile } from "../controllers/authcontrol.js";
import { authRequired } from "../middlewares/validateToken.js";

const authRouter=Express()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.get('/users', getAllUsers)
authRouter.get('/profile', authRequired, profile )

export default authRouter