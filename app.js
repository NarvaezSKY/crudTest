import  Express  from "express";
import cors from 'cors'
import morgan from "morgan";
import './db/db.js'
import router from "./routes/task.routes.js";
import authRouter from './routes/auth.routes.js'

const app=Express()
app.use(cors())
app.use(morgan('dev'))
app.use(Express.json())

const port=3000
app.listen (3000,()=>{
    console.log(`Server on port ${port}`)
})

app.use('/api', router)
app.use('/api', authRouter)