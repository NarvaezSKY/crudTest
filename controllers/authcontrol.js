import task from "../models/taskModel.js"

export const register=(req,res)=>{
    try{
        res.send({message:"registrao mi perro"})
    }catch(err){
        console.log(err)
    }
}

export const login=(req,res)=>{
    try{
        res.send({message:"logueao mi perro"})
    }catch(err){
        console.log(err)
    }
}