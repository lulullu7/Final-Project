import React from 'react'
import { Outlet } from "react-router-dom";
import UserNavbar from '../Component/UserNavbar';
import Footer from '../Component/Footer';

function UserLayout() {
  return (
    <div>
        <UserNavbar/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default UserLayout