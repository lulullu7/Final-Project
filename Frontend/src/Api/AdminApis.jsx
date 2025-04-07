import axios from "axios";


export const AdminLoginApi=async(data)=>{
    try{
        var response = await axios.post('http://localhost:8000/Admin/Admin-Login',data)
        return response.data
        

    }catch(error){
        console.log("error from admin login",error);
        
    }
}