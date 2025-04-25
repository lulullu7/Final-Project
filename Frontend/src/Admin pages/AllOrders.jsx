import React, { useEffect, useState } from 'react'
import '../User Pages/UserOrder.css'
import { ViewAllOrders } from '../Api/AdminApis'

function AllOrders() {
    const [allOrders, setAllOrders] = useState([])

    async function GetAllorders() {
        var response = await ViewAllOrders()
        setAllOrders(response)

    }
    useEffect(() => {
        GetAllorders()

    }, [])

    return (
        <div>
             {
        allOrders.map((item)=>(
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

export default AllOrders
