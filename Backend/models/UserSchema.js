const mongoose =require('mongoose')

 
const UserSchema=new mongoose.Schema({
    fullname:{type:String, require:true},
    email:{type:String, require:true},
    phone:{type:Number, require:true},
    password:{type:String, require:true},
})
 module.exports=mongoose.model('UserData',UserSchema)