import React from 'react'
import './AdminNavbar.css'
import { useDispatch } from "react-redux";
import { AdminLogoutData } from '../Redux/AdminLoginSlice';
import { Link } from 'react-router-dom';



function AdminNavbar() {
    const dispatch=useDispatch()
    
    function AdminLogout(){
        dispatch(AdminLogoutData())
       
    }
  return (
    <div>
        <section className='main_section_admin_navbar'>
            <div className='inner_div_admin_navbar'>
                <div className='admin_navbar_left'>
                    <h1>LOGO</h1>
                </div>
                <div className='admin_navbar_right'>
                    <Link to={'/Admin'}>Home</Link>
                    <Link to={'/AdminAddProduct'} > Add Product</Link>
                    <button onClick={AdminLogout} className='admin_logout_btn'>Logout</button>
                    
                </div>
            </div>

        </section>
    </div>
  )
}

export default AdminNavbar