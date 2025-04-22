const mongoose =require('mongoose')

const cartSchema=new mongoose.Schema({
    productImage:{type:String, required:true},
    productName:{type:String, required:true},
    productPrice:{type:String, required:true},
    productCompany:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'UserData',required:true}
})

module.exports=mongoose.model('Cart-data',cartSchema)