import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

function AdminPrivate({children}) {

    var AdminLoginInfo=useSelector((state)=>state.AdminLogin.AdminLoginData[0]? state.AdminLogin.AdminLoginData[0]:null)
    var AdminToken =null
    if (AdminLoginInfo){
      // console.log(AdminLoginInfo.Token);
      AdminToken=AdminLoginInfo.Token
      
    }

    if(!AdminToken){
        return <Navigate to='/Admin-login' replace />
    }
    return children;

  
}

export default AdminPrivate