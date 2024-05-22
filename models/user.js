const mongoose=require('mongoose');

let userSchema=mongoose.Schema({
    // name:String,
    // number:number
    name:{
        type:String,
        required:[true,"name is required"],
        allowNull:false
    },
    email:{
        type:String,
        required:[true,"name is required"],
        allowNull:true
    },
    password:{
        type:String,
        required:[true,"name is required"],
        allowNull:false
    },
    number:{
        type:Number,
        required:[true,"name is required"],
        allowNull:false
    },
    role:{
        type:String,
        required:false,
        allowNull:true,
        default:"user"
    }
})

const User=mongoose.model("User",userSchema);
module.exports=User;