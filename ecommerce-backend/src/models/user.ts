import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document{
    _id:string;
    name:string;
    email:string;    
    photo:string;    
    role: "admin" | "user";
    gender: "male" | "female";
    dog:Date;
    createdAt:Date;
    updatedAt:Date;
    //virtual attribute
    age:number;
}

const schema = new mongoose.Schema(
  {
    _id:{
        type:String,
        required:[true,"Please enter ID"]
    },
    name:{
        type:String,
        required:[true,"Please enter Name"]
    },
    photo:{
        type:String,
        required:[true,"Please add Photo"]
    },
    email:{
        type:String,
        unique:[true,"Email Already exist"],
        required:[true,"Please add email"],
        validate:validator.default.isEmail
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:[true,"Please enter Gender"]
    },
    dob:{
        type:Date,
        required:[true,"Please enter Date of birth"]
    }
  },
  {
    timestamps: true,
  }
);

schema.virtual("age").get(function(){
    const today=new Date();
    const dob=this.dob;
    let age=today.getFullYear()-dob.getFullYear()
    if(today.getMonth()<dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate()<dob.getDate()){
        age--;
    }
    return age;
})

export const User = mongoose.model<IUser>("User", schema);


