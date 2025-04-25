import React from 'react'
import './AdminNavbar.css'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"; 
import { UserLogoutData } from '../Redux/UserLoginSlice';

function UserNavbar() {

    
    var dispatch=useDispatch()
    function logoutuser(){
        dispatch(UserLogoutData())
    }
  return (
    <div>
        <section className='main_section_admin_navbar'>
            <div className='inner_div_admin_navbar'>
                <div className='admin_navbar_left'>
                    <h1>LOGO</h1>
                </div>
                <div className='admin_navbar_right'>
                    <Link to={'/Home'} >Home</Link>
                    <Link to={'/Cart'}>Cart</Link>
                    <Link to={'/Orders'}>order</Link>
                    <button className='admin_logout_btn' onClick={logoutuser}>Logout</button>
                    
                </div>
            </div>

        </section>
    </div>
  )
}

export default UserNavbar