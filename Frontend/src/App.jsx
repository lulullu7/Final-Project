import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from './Admin pages/AdminLogin';
import AdminHome from './Admin pages/AdminHome';
import { useSelector } from "react-redux";
import AddProduct from './Admin pages/AddProduct';
import AdminLayout from './Layouts/AdminLayout';
import AdminPrivate from './Component/AdminPrivate';
import Home from './User Pages/Home';

function App() {

 

  return (
    <div>
      <Router>
        <Routes>
          {/* Admin public Routes */}
          <Route path='/Admin-login' element={<AdminLogin/>} />
          <Route path='/' element={<Home/>} />

          {/* Admin protected routes  */}
          <Route element={<AdminPrivate> <AdminLayout/> </AdminPrivate>} >
          <Route path='/Admin' element={<AdminHome/>} />
          <Route path='/Admin-Add-Product' element={<AddProduct/>} />

          </Route>

 
       
        </Routes>
      </Router>
    </div>
  )
}

export default App