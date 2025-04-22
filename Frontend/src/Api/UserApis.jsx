import { basicRequest, UserRequest } from "../Axios/AxiosCreate";
import { UserLoginData } from "../Redux/UserLoginSlice";


// user signup api
export const userSignup=async(data)=>{
    try{
        var response=await basicRequest.post('/User/Signup',data)
        alert(response.data.message)
        

    }catch(error){
        console.log("error from user signup",error);
        

    }
}

// user login api

export const userLogin=async (data,dispatch)=>{
    try{    
        var response=await basicRequest.post('/User/Login',data)
        dispatch(UserLoginData(response.data))
        

    }catch(error){
        console.log("error from user login" ,error);
        
    }

}

// user add to cart 
export const AddCart=async(data) =>{
    try{
        var response=await UserRequest.post('/Cart/Add-Cart',data)
        alert(response.data.message)
        
    }catch(error){
        console.log("error from add  cart",error);

        
    }
}
// 
export const GetCart=async(id)=>{
    try{
        var response=await UserRequest.get(`/Cart/Get-Cart/${id}`)
        console.log(response.data);
        
        return response.data
        

    }catch(error){
        console.log('error from get cart',error);
        
    }
}

// user cart remove product api 
export const RemoveCartProduct=async(data)=>{
    console.log(data);
    
    try{
        var response=await UserRequest.delete('/Cart/remove-product',{data:data})
        console.log(response);
        
    }catch(error){
        console.log('error from remove product from cart',error);
        
    }
}