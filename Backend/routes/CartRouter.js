const VerifyTocken = require('../Verification/TockenVerification')

var router=require('express').Router()
var cart=require('../models/CartSchema')
router.post('/Add-Cart',VerifyTocken,async(req,res)=>{
    console.log(req.body);
    

    try{
        var newCart=new cart({
            productCompany:req.body.cart.productCompany,
            productImage:req.body.cart.productImage,
            productName:req.body.cart.productName,
            productPrice:req.body.cart.productPrice,
            userId:req.body.ID
        })
        await newCart.save()
        res.status(200).json({message:'product cart added'})

    }catch(error){
        console.log("error from add to cart ",error);
        res.status(500),json(error)
        
    }
})

// getting cart data by user id

router.get('/Get-Cart/:ID',async (req,res)=>{
    try{
        var cartData=await cart.find({userId:req.params.ID}).populate('userId')
        res.status(200).json(cartData)

    }catch(error){
        console.log("error from get cart",error);
        res.status(500).json(error)
        
    }
    
})

// remove product from cart
router.delete('/remove-product',async(req,res)=>{
    console.log(req.body);
    try{
        var product=await cart.findOneAndDelete({_id:req.body.ProductID,userId:req.body.ID})
        console.log(product);
        res.status(200).json({message:'product removed'})
        

    }catch(error){
        console.log('error from remove from cart',error);
        res.status(500).json(error)
        
    }
    
})

module.exports=router