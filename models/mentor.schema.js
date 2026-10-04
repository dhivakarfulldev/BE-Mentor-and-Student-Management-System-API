import mongoose from "mongoose";

const mentorschema = mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   email:{
    type:String,
    required:true,
    unique:true,
    trim:true
   }
},{
    timestamps:true
})

const Mentor = mongoose.model("Mentor" , mentorschema);
export default Mentor;