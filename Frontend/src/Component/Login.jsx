import React, { useState } from 'react'
import './Login.css'
import { AdminLoginApi } from '../Api/AdminApis'
import { useDispatch } from "react-redux";


function Login(prop) {
    var owner=prop.owner
    const dispatch=useDispatch()
    
    const [adminData,setAdminData]=useState({
        Email:'',
        Password:''
    })

    function HandleData(e){
        const {name,value}=e.target
        setAdminData((preview)=>({
            ...preview,
            [name]:value
        }))

    }
    async function HandleAdminSubmit(){
        try{
            var response= await AdminLoginApi(adminData,dispatch)
            alert('login success')
            

        }catch(error){
            console.log(error);
            

        }

    }
    

  return (
    <div>
        <section className='main_section_login'>
            <div className='inner_section_login'>
                <h1>LOGO</h1>

                <div className='login_input_main'>
                    <label htmlFor="email">Email:</label>
                    <input 
                     type="text" 
                     placeholder='enter your email id' 
                     className='input_login'
                     onChange={HandleData}
                     name='Email'
                     />
                </div>
                <div className='login_input_main'>
                    <label htmlFor="password">Passwod:</label>
                    <input type="password" 
                     placeholder='enter your password'
                     className='input_login'
                     onChange={HandleData}
                     name='Password'

                     />
                </div>
             
                <button className='button_login' onClick={HandleAdminSubmit} >Admin Login</button>
             

            </div>

        </section>
    </div>
  )
}

export default Login