const mongoose=require('mongoose');
let productSchema=mongoose.Schema({
    productname:{
        type:String,
        required:[true,"name is required"],
        allowNull:false
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        allowNull:false
    },
    quantity:{
        type:Number,
        required:[true,"quantity is required"],
        allowNull:false
    },
    description:{
        type:String,
        required:[true,"description is required"],
        allowNull:false
    },
    category:{
        type:String,
        required:[true,"category is required"],
        allowNull:false
    },
    image:{
        type:String,
        required:[true,"image is required"],
        allowNull:false
    },
    image:{
        type:String,
        required:[true,"image is required"],
        allowNull:false
    }
    
})
const Product=mongoose.model("Product",productSchema);
module.exports=Product;