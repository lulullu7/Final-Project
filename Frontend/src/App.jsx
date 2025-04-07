import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from './Admin pages/AdminLogin';
import AdminHome from './Admin pages/AdminHome';

function App() {
  return (
    <div>
      <Router>
        <Routes>

        {/* admin route */}
        <Route path='/Adminlogin' element={<AdminLogin/>} />
        <Route path='/Admin' element={<AdminHome/>} />


        </Routes>
      </Router>
    </div>
  )
}

export default App