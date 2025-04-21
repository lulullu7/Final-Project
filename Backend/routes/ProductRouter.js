const router = require('express').Router()
const product = require('../models/ProductSchema')
const multer = require('multer')
const path = require('path')
const VerifyTocken = require('../Verification/TockenVerification')

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



module.exports = router