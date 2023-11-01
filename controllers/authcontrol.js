import user from "../models/userModel.js"
import  bcrypt  from "bcryptjs";
import  createAccesToken  from "../libs/jwt.js";

export const register= async (req,res)=>{
    const {username, email, password}= req.body

    try{
        const hackerman=await bcrypt.hash(password, 10)

        const newUser=new user({
            username, 
            email, 
            password:hackerman
        })

    const userSaved=await newUser.save()
    const token= await createAccesToken({id:userSaved._id})

        res.cookie('token', token)
        res.json({
            id:userSaved._id,
            username:userSaved.username,
            email:userSaved.email
        })

    }catch(err){
        return res.status(500).json({message: "probablemente el email ya esta en uso askjdks"})
    }
}

export const login= async (req,res)=>{
    const {email, password}= req.body

    try{
        const userFound=await user.findOne({email})
        if (!userFound){
            res.send({message:"user not found"})
        }
        const match=await bcrypt.compare(password, userFound.password)
        if (!match){
            res.send({message:"incorrect password"})
        }
    const token= await createAccesToken({id:userFound._id})

        res.cookie('token', token)
        res.json({
            id:userFound._id,
            username:userFound.username,
            email:userFound.email
        })

    }catch(err){
        console.log(err)
    }
}


export const logout =async (req,res)=>{
    res.cookie('token', "", {
        expires:new Date(0)
    })
    return res.status(200).json({
        message:"Cerraste sesión"
    })
}


export const getAllUsers=async(req,res)=>{
    try {
        const users= await user.find()
        res.send(users)


    } catch (error) {
        return res.status(400).json({message:`algo salio mal wn, error ${error}`})
    }
}