import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from './Admin pages/AdminLogin';
import AdminHome from './Admin pages/AdminHome';
import { useSelector } from "react-redux";
import AddProduct from './Admin pages/AddProduct';

function App() {

  var AdminLoginInfo=useSelector((state)=>state.AdminLogin.AdminLoginData[0]? state.AdminLogin.AdminLoginData[0]:null)
  var AdminToken =null
  if (AdminLoginInfo){
    console.log(AdminLoginInfo.Token);
    AdminToken=AdminLoginInfo.Token
    
  }

  return (
    <div>
      <Router>
        <Routes>

        {/* admin route */}
        
        <Route path='/Admin' element={AdminToken ? <AdminHome/>: <AdminLogin/>} />
        <Route path='/AdminAddProduct' element={AdminToken ? <AddProduct/>: <AdminLogin/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App