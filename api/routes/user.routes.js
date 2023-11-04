import express from "express"
import {upload} from "../config/multer.js";
import {uploadFile} from '../util/uploadFile.js'
import {User} from '../models/User.js'
import { async } from "@firebase/util";
import mongoose, { Mongoose } from "mongoose";


const router=express()

router.get('/user', async(req,res)=>{
try {
    const users=await User.find().sort({createdAt:-1})
    res.status(200).json({users})

} catch (error) {
    return res.status(400).json({message:`ERROR! ${error}`})
}
})


router.post('/createuser',upload.fields([{name: 'image', maxCount:1}]), async(req,res)=>{
    const body=req.body
    const image=req.files.image

    if (image&&image.length>0){
        const {dowloadURL}=await uploadFile(image[0])

        const newUser=await new User({
            firstname: body.firstname,
            lastname: body.lastname,
            image: dowloadURL
        }).save()
        return res.status(200).json({
            newUser
        })
    }

    return res.status(400).json({message:'missing image in req.body'})
})

router.delete('/delete/:id', async(req,res)=>{
    const id=req.params.id
    try {
        await User.deleteOne({_id:id})
        res.status(200).send({message:`deleted ${id}`})
    } catch (error) {
        console.error(error)
    }
})

export default router