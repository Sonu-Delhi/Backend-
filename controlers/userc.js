const User=require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();
// create a user
const createUser=async (req,res,next)=>{
    const user=req.body;
    const newUser=new User(user);
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        newUser.password = hashedPassword;
        await newUser.save();
        console.log("User is Created",newUser);
        return res.status(201).json({
            message:"User Created Successfully",
            result:newUser
        });
    }
    catch (err){
        return res.status(500).json({
            message:err.message
        })
    }
}

// List All User
const getAllUser = async (req, res, next) => {
    try{
        const users=await User.find();
        return res.status(200).json({
            message:"All Users",
            result:users
        });
    }
    catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}

// User Delete
const deleteUser= async(req,res,next)=>{
    try{
        const id=req.params.id;
        const userDelete=await User.findByIdAndDelete(id);
        console.log("User is Deleted",userDelete);
        return res.status(201).json({
            message:"User Deleted Successfully",
            result:userDelete
        });
    }
    catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}

// User Update
const userUpdate = async (req, res)=>{
    const id = req.params.id;
    const updatedValue = req.body;
    try{
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({
                message:"User Not Found"
            })
        }
        await User.findByIdAndUpdate(id, updatedValue);
        return res.status(200).json({
            message:"User Updated Successfully",
            result:updatedValue
        })
    }
    catch (err){
        console.log(err);
    }
}

// User Login
const login = async (req,res,next)=>{
    const {email,password}=req.body;
    try{
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(404).json({
                message:"User with given email address does not exist"
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({
                message:"Invalid Password"
            })
        }
        const payload = {user}
        const token = jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn:"1h"
        })
        return res.status(200).json({
            message:"Successfully User Login",
            token:token
        })
    }
    catch (err){
        console.log(err);
    }
}


module.exports={
    createUser,
    deleteUser,
    getAllUser,
    userUpdate,
    login
}