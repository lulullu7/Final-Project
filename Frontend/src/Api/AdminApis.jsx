import axios from "axios";
import { AdminLoginData } from "../Redux/AdminLoginSlice";


export const AdminLoginApi=async(data,dispatch)=>{
    try{
        var response = await axios.post('http://localhost:8000/Admin/Admin-Login',data)
        dispatch(AdminLoginData(response.data))
        

    }catch(error){
        console.log("error from admin login",error);
        
    }
}