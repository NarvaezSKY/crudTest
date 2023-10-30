import mongoose from "mongoose";

const task=new mongoose.Schema({
  title:{
    type: String,
    required:false
  },
  details:{
    type: String,
    required:false
  }
},{
    timestamps:true
});

export default mongoose.model('task',task)
