const JWT=require('jsonwebtoken')

const VerifyTocken=(req,res,next)=>{
    // take the passing auther data
    var AuthHeader=req.headers.authorization
    console.log(AuthHeader);

    if(AuthHeader && AuthHeader.startsWith('Bearer ')){
        // token spliting with bearer
        var Token =AuthHeader.split(' ')[1]
        console.log(Token);
        
        // Token verifying using JWT
        JWT.verify(Token,process.env.Tockenkey,(error,user)=>{
            if(error){
                console.log("Token verification failed",error.message);
                return res.status(401).json('Token is not valid')
            }else{
                req.user =user
                console.log("token verifivation success");
                next();
                
            }

        })
        

    }else{
        console.log("Authorization Header is missing or incorrectly formatted ");
        return res.status(401).json('Authorization Header is missing or incorrectly formatted')
        
    }
    

}
module.exports=VerifyTocken