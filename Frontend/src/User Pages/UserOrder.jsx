import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AllOrderUser } from '../Api/UserApis';
import './UserOrder.css'

function UserOrder() {
    const [myOrder,setMyOrder]=useState([])

    var UserLoginInfo=useSelector((state)=>state.UserLogin? state.UserLogin.UserLogin[0]:null)
    // console.log(UserLoginInfo.id);
    var ID=UserLoginInfo.id

    async function getOrders() {
        var Data =await AllOrderUser(ID)
        console.log(Data);
        setMyOrder(Data)
        
    }
useEffect(()=>{
    getOrders()
},[])

  return (
    <div>
      {
        myOrder.map((item)=>(
          <div className='order_main' >
            <div className='order_content'><strong>Order placed</strong>{item.created}</div>
            {/* <img src={"../../public/images/${item.productDetails.productImage}"} alt="" /> */}
            <div className='order_content'> <strong>Price:</strong> {item.amount} </div>
            {/* <div className='order_content'> <strong>Name:</strong> {item.productDetails.name} </div> */}
            <div className='order_content'><strong>CustomerName:</strong>{item.CustomerDetails.name} </div>
            <div className='order_content'><strong>Phone:</strong>{item.CustomerDetails.phone} </div>
            <div className='order_content'><strong>Address:</strong>{item.CustomerDetails.address} </div>
            <div className='order_content'><strong>Status:</strong>{item.status}</div>

            
          </div>
        ))
      }
    </div>
  )
}

export default UserOrder