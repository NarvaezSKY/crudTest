import Express from "express";
import morgan from "morgan";
import { connection } from "./config/db.js";
import router from "./routes/user.routes.js";

// DB
connection();

const app=Express()
app.use(morgan('dev'))
const port=3000

app.use('/api', router)

app.listen(port,()=>{
    console.log(`API en puerto ${port}`)
})