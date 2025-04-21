import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from './Admin pages/AdminLogin';
import AdminHome from './Admin pages/AdminHome';
import { useSelector } from "react-redux";
import AddProduct from './Admin pages/AddProduct';
import AdminLayout from './Layouts/AdminLayout';
import AdminPrivate from './Component/AdminPrivate';
import Home from './User Pages/Home';
import UserLogin from './User Pages/UserLogin';
import UserSignup from './User Pages/UserSignup';
import UserPrivate from './Component/UserPrivate';
import UserHome from './User Pages/UserHome';
import UserLayout from './Layouts/UserLayout';

function App() {

 

  return (
    <div>
      <Router>
        <Routes>
          {/* Admin public Routes */}
          <Route path='/Admin-login' element={<AdminLogin/>} />
          <Route path='/' element={<Home/>} />

          {/* User public Routes */}
          <Route path='/Login' element={<UserLogin/>}/>
          <Route path='/Signup' element={<UserSignup/>}/>


          {/* Admin protected routes  */}
          <Route element={<AdminPrivate> <AdminLayout/> </AdminPrivate>} >
          <Route path='/Admin' element={<AdminHome/>} />
          <Route path='/Admin-Add-Product' element={<AddProduct/>} />
          
          </Route>

        {/* User protected routes  */}
        <Route element={<UserPrivate> <UserLayout/> </UserPrivate>}>
        <Route path='/Home' element={<UserHome/>}/>

        </Route>


 
       
        </Routes>
      </Router>
    </div>
  )
}

export default App