import { basicRequest } from "../Axios/AxiosCreate";

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

export const userLogin=async (data)=>{
    try{    
        var response=await basicRequest.post('/User/Login',data)
        console.log(response);
        

    }catch(error){
        console.log("error from user login" ,error);
        
    }

}