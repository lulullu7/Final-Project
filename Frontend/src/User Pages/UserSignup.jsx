import React, { useState } from 'react'
import { userSignup } from '../Api/UserApis'
import { useNavigate } from "react-router-dom";


function UserSignup() {

    const [userData, setUserData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Phone:''

    })
    var navigate=useNavigate()

    function HandleData(e) {
        const { name, value } = e.target
        setUserData((preview) => ({
            ...preview,
            [name]: value
        }))

    }

    async function signupdata() {
        await userSignup(userData)
        navigate('/Login')
    }

    return (
        <div>
            <section className='main_section_login'>
                <div className='inner_section_login'>
                    <h1>LOGO</h1>

                    <div className='login_input_main'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            placeholder='enter your name'
                            className='input_login'
                            onChange={HandleData}
                            name='Name'
                        />
                    </div>

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
                        <label htmlFor="email">Phone:</label>
                        <input
                            type="number"
                            placeholder='enter your phone number'
                            className='input_login'
                            onChange={HandleData}
                            name='Phone'
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

                    <button className='button_login' onClick={signupdata} >Signup</button>




                </div>

            </section>
        </div>
    )
}

export default UserSignup