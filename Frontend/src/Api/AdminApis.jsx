import axios from "axios";
import { AdminLoginData } from "../Redux/AdminLoginSlice";


export const AdminLoginApi = async (data, dispatch) => {
    try {
        var response = await axios.post('http://localhost:8000/Admin/Admin-Login', data)
        dispatch(AdminLoginData(response.data))


    } catch (error) {
        console.log("error from admin login", error);

    }
}

export const AddProductAdmin = async (data) => {
    try {
        var response = await axios.post('http://localhost:8000/Product/AddProduct', data, {
            headers: { 'Content-Type': 'multipart/form-data' }

        })

    } catch (error) {
        console.log("error from add product", error);

    }


}

