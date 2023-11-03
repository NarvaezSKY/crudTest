import mongoose from "mongoose";

const URI="mongodb://127.0.0.1/imagenes"

export const connection=()=>{
    mongoose.connect(URI).then(()=>{
        console.log("db is connected")
    }).catch(err=>{
        console.error("DB ERROR", err)
    })
}