const mongoose=require('mongoose')

const AdminSchema=new mongoose.Schema({
    AdminEmail:{type:String,required:true},
    AdminPassword: {type:String,required:true}
})
module.exports=mongoose.model('Admin_Data',AdminSchema)
