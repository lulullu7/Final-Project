import React from 'react'
import { Outlet } from "react-router-dom";
import AdminNavbar from '../Component/AdminNavbar';
import Footer from '../Component/Footer';

function AdminLayout() {
  return (
    <div>
        <AdminNavbar/>
        <div>
            <Outlet/>
        </div>

        <Footer/>
    </div>
  )
}

export default AdminLayout