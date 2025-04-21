const VerifyTocken = require('../Verification/TockenVerification')

var router=require('express').Router()
var cart=require('../models/CartSchema')
router.post('/Add-Cart',VerifyTocken,async(req,res)=>{
    console.log(req.body);
    

    try{
        var newCart=new cart(req.body)
        await newCart.save()
        res.status(200).json({message:'product cart added'})

    }catch(error){
        console.log("error from add to cart ",error);
        res.status(500),json(error)
        
    }
})

module.exports=router