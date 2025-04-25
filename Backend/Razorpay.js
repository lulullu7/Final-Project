const Razorpay=require('razorpay')


var instance=new Razorpay({
    key_id:process.env.payment_Key_Id,
    key_secret:process.env.payment_Key_Secret
})
module.exports=instance