import React, { useEffect, useState } from 'react'
import { basicRequest } from '../Axios/AxiosCreate'
import './Home.css'
import CommonNav from '../Component/CommonNav'

function Home() {

  const [allProduct,setAllProduct]=useState([])
 
  useEffect(()=>{
    async function collectProduct() {
      var response =await basicRequest.get('/Product/View-All-Product')
      console.log(response.data);
      setAllProduct(response.data)      
      
    }
    collectProduct()

  },[])

  return (
    <div>
      <CommonNav/>
      {
        allProduct.map((item)=>(
          <div className='Product_card'>
            <img src={`/Images/${item.productImage}`} alt="{item.productImage}" height={'310px'} width={'310px'} />
            <h1>Name:{item.productName}</h1>
            <h1>Price:{item.productPrice}$ </h1>
            <button className='addtocart_button'>Add To Cart</button>

          </div>


        ))
      }
    </div>
  )
}

export default Home