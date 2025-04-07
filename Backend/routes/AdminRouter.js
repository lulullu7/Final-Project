const router = require('express').Router()
const crypto = require('crypto-js')
const Admin = require('../models/AdminSchema')
const JWT=require('jsonwebtoken')


// Admin signup data
function adminSignup() {
    router.post('/', async (req, res) => {
        try {
            console.log(req.body);
            var password = crypto.AES.encrypt(process.env.AdminPass, process.env.Passkey).toString()
            console.log(password);
            const newAdmin = new Admin({
                AdminEmail: 'Admin@gmail.com',
                AdminPassword: password
            })
            await newAdmin.save()
            console.log('Admin data created');
            
            res.status(201).json('Admin created')

        } catch (error) {
            console.log("error from admin signup", error);
            res.status(500).json(error)

        }
    })
}
// add admin function call
// adminSignup()

// admin login router

router.post('/Admin-Login',async(req,res)=>{
    try{
        console.log(req.body);
        const FindedAdmin=await Admin.findOne({AdminEmail:req.body.Email})
        console.log(FindedAdmin);
       if(FindedAdmin){
         // passsword decryption using crypto
         var bytes=crypto.AES.decrypt(FindedAdmin.AdminPassword,process.env.Passkey)
         var originalPassword=bytes.toString(crypto.enc.Utf8)
         if (req.body.Password===originalPassword){
            // creating jwt token
            const Token=JWT.sign({id:FindedAdmin.id},process.env.Tockenkey,{expiresIn:'10d'})
        //    sending tocken and user id to frontend
            res.status(200).json({Token,Id : FindedAdmin._id})
            
         }else{
            res.status(404).json("password is wrong")
         }
       }else{
        res.status(404).json('Admin email not found')
       }
        
        
        

    }catch(error){
    res.status(500).json(error)
    console.log("eroor from admin login",error);
    
        

    }
})


module.exports = router