const router = require('express').Router()
const product = require('../models/ProductSchema')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    
    
    destination: function (req, file, cb) {
        console.log('ho');
        const uploadDir = path.resolve(__dirname, '../../Frontend/public/Images');
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        console.log('ho');
        const filenameuniqe = file.originalname;
        cb(null, filenameuniqe)

    }

})
const upload = multer({ storage: storage })



router.post('/AddProduct', upload.single('productImage'), async (req, res) => {
    const productfilename = req.file.filename
    console.log(productfilename);

    try {
        console.log(req.body);


    } catch (error) {
        res.status(500).json(error);
        console.log("error from product add");
    }

})


module.exports = router