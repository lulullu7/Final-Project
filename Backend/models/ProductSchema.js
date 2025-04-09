const mongoose =require('mongoose')

const productSchema=new mongoose.Schema({
    productImage:{type:String, required:true},
    productNme:{type:String, required:true},
    productPrice:{type:String, required:true},
    productDis:{type:String, required:true},
    productCompany:{type:String, required:true}
})

module.exports=mongoose.model('Product-data',productSchema)