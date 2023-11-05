import  jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../secret.js";
export const authRequired =(req,res,next)=>{
    
    const {token}=req.cookies;
    if (!token) return res.status(401).json({message:"hacker de mierda chupala puto pendejo idiota imbecil puñetas"})

    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if (err) return res.status(401).json({message:"jajaja tu token de mierda no sirvio anda a cagar malparido hacker .|."})

        req.user=user

    })

    next()
}