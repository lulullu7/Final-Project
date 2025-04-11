import axios from 'axios'

// IMPORT ENV IN REACT
const baseurl=import.meta.env.VITE_BASE_URL;

function getTokenFromStorage() {
    const persistLoginData=localStorage.getItem('persist:logindata')
    const LoginData=persistLoginData ? JSON.parse(persistLoginData) : {}
    
    var loginInfo=LoginData.AdminLogin ? JSON.parse(LoginData.AdminLogin).AdminLoginData[0]:null
    return loginInfo ? loginInfo.Token : ' ' 
     
    
}


export const basicRequest=axios.create({
    baseURL:baseurl
})

export const AdminRequest=axios.create({
    baseURL:baseurl,
    headers:{ Authorization: `Bearer ${getTokenFromStorage()}`}
})