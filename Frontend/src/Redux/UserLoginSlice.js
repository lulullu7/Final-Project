import { createSlice } from "@reduxjs/toolkit";

const LoginSlice=createSlice({
    name:'UserLogin',
    initialState:{
        UserLogin:[]
    },
    reducers:{
        UserLoginData:(state,action)=>{
            state.UserLogin.push(action.payload)
        },
        UserLogoutData:(state,action)=>{
            state.UserLogin=[]
        }
    }
})

export const {UserLoginData,UserLogoutData} =LoginSlice.actions
export default LoginSlice.reducer