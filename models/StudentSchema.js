const mongoose=require('mongoose');
let studentSchema=mongoose.Schema({
    studentName:{
        type:String,
        required:[true,"name is required"],
        allowNull:false
    },
    Fname:{
        type:String,
        required:[true,"Father name is required"],
        allowNull:false
    },
    Mname:{
        type:String,
        required:[true,"Mother Name is required"],
        allowNull:false
    },
    Gender:{
        type:String,
        required:[true,"Gender is required"],
        allowNull:false
    },
    RollNo:{
        type:Number,
        required:[true,"Roll Number is required"],
        allowNull:false
    },
    MobileNo:{
        type:Number,
        required:[true,"Mobile Number is required"],
        allowNull:false
    },
    Course:{
        type:String,
        required:[true,"Course is required"],
        allowNull:false
    },
    Branch:{
        type:String,
        required:[true,"Branch is required"],
        allowNull:false
    },
    Year:{
        type:Number,
        required:[true,"Year is required"],
        allowNull:false
    },
    Semester:{
        type:Number,
        required:[true,"Semester is required"],
        allowNull:false
    },
    Email:{
        type:String,
        required:[true,"Email is required"],
        allowNull:false
    },
    Password:{
        type:String,
        required:[true,"Password is required"],
        allowNull:false
    },
    Address:{
        type:String,
        required:[true,"Address is required"],
        allowNull:false
    },
    State:{
        type:String,
        required:[true,"State is required"],
        allowNull:false
    },
    Country:{
        type:String,
        required:[true,"Country is required"],
        allowNull:false
    },
    PinCode:{
        type:Number,
        required:[true,"PinCode is required"],
        allowNull:false
    }
    

})

let Student=mongoose.model('Student',studentSchema);
module.exports=Student;