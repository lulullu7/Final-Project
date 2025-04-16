import React, { useState } from 'react'
import './Login.css'
import { AdminLoginApi } from '../Api/AdminApis'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../Api/UserApis';


function Login(prop) {
    var owner = prop.owner
    const dispatch = useDispatch()
    var navigate = useNavigate()

    const [adminData, setAdminData] = useState({
        Email: '',
        Password: ''
    })
    // update admin data state
    function HandleData(e) {
        const { name, value } = e.target
        setAdminData((preview) => ({
            ...preview,
            [name]: value
        }))

    }
    // calling api function to submit admin login
    async function HandleAdminSubmit() {
        try {
            var response = await AdminLoginApi(adminData, dispatch)
            navigate('/Admin')

        } catch (error) {
            console.log(error);


        }

    }

  // calling api function to submit user login
    async function HandleUserSubmit() {
        await userLogin(adminData)
        
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

                    {
                        owner == 'user' ? (<button className='button_login' onClick={HandleUserSubmit} >Login</button>) :
                            (<button className='button_login' onClick={HandleAdminSubmit} >Admin Login</button>)
                    }

                    {
                        owner == 'user' ? (<Link to={'/Signup'} >Signup</Link>) :
                            ("")
                    }



                </div>

            </section>
        </div>
    )
}

export default Login