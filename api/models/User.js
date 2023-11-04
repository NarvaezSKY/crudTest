import {Schema, model} from "mongoose";

const userSchema=new Schema(
    {
        firstname:{type:String},
        lastname:{type:String},
        image:{type:String},
    
    },
    {
        timestamps:true
    }
)

export const User=model('User', userSchema)
