
import { AdminLoginData } from "../Redux/AdminLoginSlice";
import { AdminRequest, basicRequest } from "../Axios/AxiosCreate";


export const AdminLoginApi = async (data, dispatch) => {
    try {
        var response = await basicRequest.post('/Admin/Admin-Login', data)
        dispatch(AdminLoginData(response.data))


    } catch (error) {
        console.log("error from admin login", error);

    }
}
// adding product api   
export const AddProductAdmin = async (data,AdminToken) => {
    try {
        var response = await AdminRequest.post('/Product/AddProduct', data, {
            headers: { 
                'Content-Type': 'multipart/form-data',
               
             }

        })
        console.log(response.data);
        alert(response.data.message)
        

    } catch (error) {
        console.log("error from add product", error);

    }


}

