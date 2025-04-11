const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')

// dotenv file config
dotenv.config();
app.use(express.json())
app.use(cors())

// database connection
mongoose.connect(process.env.MongoDBUrl).then(()=>{
    console.log("Database connected!");   
}).catch((err)=>{
    console.log("error from database connection",err);
    
})

// router imports
var adminRouter= require('./routes/AdminRouter.js')
var productRouter=require('./routes/ProductRouter.js')
var UserRouter=require('./routes/UserRouter.js')

// router calling
app.use('/Admin',adminRouter)
app.use('/Product',productRouter)
app.use('/User',UserRouter)


// server creation
app.listen(8000,()=>{
    console.log("server created");
    
})


// http://localhost:8000/Admin/Admin-signup{
// AdminName:'Admin',
// AdminPassword:'123'
// }