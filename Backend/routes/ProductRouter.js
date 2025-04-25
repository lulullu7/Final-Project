const router = require('express').Router()
const product = require('../models/ProductSchema')
const multer = require('multer')
const path = require('path')
const VerifyTocken = require('../Verification/TockenVerification')
const razorpay=require('../Razorpay')
const order=require('../models/OrderSchema')

// multer setupping product image 
const storage = multer.diskStorage({
    
    
    destination: function (req, file, cb) {
        const uploadDir = path.resolve(__dirname, '../../Frontend/public/Images');
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        const filenameuniqe = file.originalname;
        cb(null, filenameuniqe)

    }

})
const upload = multer({ storage: storage })


// adding new product to database
router.post('/AddProduct',VerifyTocken , upload.single('productImage'), async (req, res) => {
    const productfilename = req.file.filename
    console.log(productfilename);

    try {
        const newProduct=new product({
            productImage:productfilename,
            productName:req.body.productName,
            productPrice:req.body.productPrice,
            productCompany:req.body.productCompany,
            productDis:req.body.productDis
        })
        await newProduct.save()
        res.status(200).json({message:'New product uploaded'})

    } catch (error) {
        res.status(500).json(error);
        console.log("error from product add",error);
    }

})

// view all product 
router.get('/View-All-Product',async (req, res) => {
    try{
        var allProduct = await product.find()
        res.status(200).json(allProduct)

    }catch (error) {
        res.status(500).json(error);
        console.log("error from product add",error);
    }
})

// view all product with  token verifing
router.get('/View-All-Product-Token',VerifyTocken,async (req, res) => {
    try{
        var allProduct = await product.find()
        res.status(200).json(allProduct)

    }catch (error) {
        res.status(500).json(error);
        console.log("error from product add",error);
    }
})


// adding new order
router.post('/Create-Order',VerifyTocken,async (req,res)=>{
    var {amount, productDetails,CustomerDetails,userid}=req.body
    console.log(productDetails);
    
    try{

        var options={
            amount:amount*1,
            currency:'INR',
            receipt:`reciept_${Date.now()}`
        }
        var orderDetails=await  razorpay.orders.create(options)

        const newOrder= new order({
            userid:userid,
            amount:orderDetails.amount,
            order_id:orderDetails.id,
            productDetails,
            CustomerDetails
        })
        await newOrder.save()
        res.status(201).json(orderDetails)
        

    }catch(error){
        console.log("error from create order",error);
        res.status(500).json(error)
        
    }
    
})
// finding user order with user id
router.get('/User-orders/:ID',VerifyTocken,async(req,res)=>{
    var userid=req.params.ID
    console.log(userid);
    
    try{
        var product =await order.find({userid:userid})
        res.status(200).json(product)

    }catch(error){
        console.log("error from user order ",error);
        res.status(500).json(error)
    }
})

// get all orders
router.get('/Admin-All-Order',VerifyTocken,async(req,res)=>{
    try{
        var Product=await order.find()
        res.status(200).json(Product)

    }catch(error){
        console.log(e);
        res.status(500).json(error)
    }
})

module.exports = router