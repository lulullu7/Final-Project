import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

function UserPrivate({children}) {

    var UserLoginInfo=useSelector((state)=>state.UserLogin? state.UserLogin.UserLogin[0]:null)
    var UserToken =null
    if (UserLoginInfo){
      // console.log(UserLoginInfo.Token);
      UserToken=UserLoginInfo.Token
      
    }

    if(!UserToken){
        return <Navigate to='/Login' replace />
    }
    return children;

  
}

export default UserPrivate