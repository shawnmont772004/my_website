import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import {errorHandler} from "../utils/error.js";

export const authcontroller= async(req,res,next)=>{
    const {fname,lname,username,email,password,phone}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const typedUser=new  User({firstName:fname,lastName:lname,userName:username,email:email,password:hashedPassword,phoneNo:phone});
    try{
        await typedUser.save();
        res.status(201).json("User created successfully");
    }
    catch(error)
    {
        //res.status(500).json(error);
        next(error);
    }

}

export const authsignincontroller=async(req,res,next)=>{
    const {mail,pass}=req.body;
    try{
        const verifyUser= await User.findOne({email : mail});
    if (!verifyUser){
        return next(errorHandler(404,"User not found"));
    }
    const decryptpass= bcryptjs.compareSync(pass,verifyUser.password);
    if(!decryptpass){
        return next(errorHandler(404,"Wrong password"));
    }
    res.status(500).json("User logged in successfully");
    }
    catch(error){
        next(error);
    }

}
 