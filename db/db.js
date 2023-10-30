import mongoose from "mongoose";

export const conection=mongoose.connect('mongodb://localhost:27017/crudtest')
.then(()=>{
    console.log('db is connected succesfully')
})
.catch((err)=>{
    console.error(err)
})