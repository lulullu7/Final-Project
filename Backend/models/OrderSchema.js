const mongoose=require('mongoose')

const OrderSchema =new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserData',
        required:true
    },
    amount:{
        type:Number,
        required:true
     },
    ProductDetails:{
        productid:String,
        productname:String,
        productimage:String,
        productprice:String,
    },
    CustomerDetails:{
        name:String,
        address:String,
        phone:Number,
    },
    order_id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'created'   // created,paid,failed
    },
    created:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Product-order',OrderSchema)