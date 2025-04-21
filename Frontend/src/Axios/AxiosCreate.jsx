import axios from 'axios'

// IMPORT ENV IN REACT 
const baseurl=import.meta.env.VITE_BASE_URL;



// basic request
export const basicRequest=axios.create({
    baseURL:baseurl
})

// admin token passing request
export const AdminRequest=axios.create({
    baseURL:baseurl,
})

// Axios Interceptor to attach admin Token dynamically before every request
AdminRequest.interceptors.request.use(
    (config)=>{
        const persistLoginData=localStorage.getItem('persist:logindata')
        const LoginData=persistLoginData ? JSON.parse(persistLoginData) : {}
        
        var loginInfo=LoginData.AdminLogin ? JSON.parse(LoginData.AdminLogin).AdminLoginData[0]:null
    
        const Token=loginInfo?.Token
        if(Token){
            config.headers.Authorization=`Bearer ${Token}`
        }
        return config
    }
)


// user token passing request
export const UserRequest=axios.create({
    baseURL:baseurl
})

// Axios Interceptor to attach admin Token dynamically before every request
UserRequest.interceptors.request.use(
    (config)=>{
        const persistLoginData=localStorage.getItem('persist:logindata');
        const LoginData=persistLoginData? JSON.parse(persistLoginData):[]
        var loginInfo =LoginData.UserLogin?JSON.parse(LoginData.UserLogin).UserLogin[0]:null

        const Token=loginInfo?.Token
        if(Token){
            config.headers.Authorization=`Bearer ${Token}`
        }
        return config
    }
)