import React from 'react'
import './AdminNavbar.css'
import { Link } from 'react-router-dom'

function CommonNav() {
  return (
    <div>
         <section className='main_section_admin_navbar'>
                    <div className='inner_div_admin_navbar'>
                        <div className='admin_navbar_left'>
                            <h1>LOGO</h1>
                        </div>
                        <div className='admin_navbar_right'>
                            <Link to={'/Login'}>
                            <button className='admin_logout_btn'>Login</button>
                            </Link>
                        
                            
                        </div>
                    </div>
        
                </section>
    </div>
  )
}

export default CommonNav