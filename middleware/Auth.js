const User = require('../models/user');
require('dotenv').config();
const jwt = require('jsonwebtoken')

const checkAuthentication = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    }
    catch (err){
        return res.status(403).json({
            message:"Kindly Login First"
        })
    }
}

const cheskAdmin = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const check=jwt.verify(token, process.env.SECRET_KEY);
        const user = User.findOne({
            email: check?.user?.email,
        });
        if(check?.user.role === "admin"){
            next();
        }
        else{
            return res.status(403).json({
                message:"You are not an Admin"
            })
        }
    }
    catch (err){
        return res.status(401).json({
            message:"Unautherize"
        })
    }
}

module.exports = {
    checkAuthentication,
    cheskAdmin
}