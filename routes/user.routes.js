import express from "express"
import {upload} from "../util/upload.js";

const router=express()

router.get('/user',(req,res)=>{
    return res.json({message:'get user'})
})

router.post('/createuser',(req,res)=>{
    return res.json({message:'create user'})
})

export default router