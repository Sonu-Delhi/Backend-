const express=require('express')
const app=express()
const User=require('./models/user')
const studentRoutes=require('./routes/user')
const bodyParser=require('body-parser');
const cors=require('cors')
require("dotenv").config();
// const bwt = require("bcryptjs")
// const bwt = require()


const mongoose=require('mongoose')
const url="mongodb+srv://sonuyadav:Sonuji25@sonuyadav.dm7dhip.mongodb.net/?retryWrites=true&w=majority&appName=SonuYadav"
// const PORT=8080

app.use(express.json({extended:true, limit:"10mb"}));
app.use(bodyParser.json({ extended:true, limit:"10mb"}));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(cors())

// {useNewUrlParser:true,useUnifiedTopology:true}
mongoose.connect(process.env.Mongo_DB_URL)
.then(()=>{    
    app.listen(process.env.Port,()=>{
        console.log(`Server is running on port http://localhost${process.env.Port}`)
        console.log(`connected to database`)
    })
}).catch((err)=>{
    console.log(err);
})

app.use('/user',studentRoutes);
app.use('/',(req,res,next)=>{
    res.send(`Server is up and running on port http://loaclhost:${process.env.Port}`)
})

