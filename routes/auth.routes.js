import  Express  from "express";
import { register, login, getAllUsers, logout } from "../controllers/authcontrol.js";
const authRouter=Express()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.get('/users', getAllUsers)

export default authRouter