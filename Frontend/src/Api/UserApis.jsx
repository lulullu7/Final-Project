import { basicRequest, UserRequest } from "../Axios/AxiosCreate";
import { UserLoginData } from "../Redux/UserLoginSlice";


// user signup api
export const userSignup=async(data)=>{
    try{
        var response=await basicRequest.post('/User/Signup',data)
        console.log(response);
        alert(response.data.message)
        

    }catch(error){
        console.log("error from user signup",error);
        

    }
}

// user login api

export const userLogin=async (data,dispatch)=>{
    try{    
        var response=await basicRequest.post('/User/Login',data)
        console.log(response.data);
        dispatch(UserLoginData(response.data))
        

    }catch(error){
        console.log("error from user login" ,error);
        
    }

}

// user add to cart 
export const AddCart=async(data) =>{
    try{
        var response=await UserRequest.post('/Cart/Add-Cart',data)
        console.log(response.data);
        
    }catch(error){
        console.log("error from add  cart",error);

        
    }
}