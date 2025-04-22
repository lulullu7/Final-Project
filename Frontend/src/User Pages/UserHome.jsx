import React, { useEffect, useState } from 'react'
import { UserRequest } from '../Axios/AxiosCreate';
import './Home.css'
import { useSelector } from 'react-redux';
import { AddCart } from '../Api/UserApis';

function UserHome() {
  const [allProduct, setAllProduct] = useState([])

  var UserLoginInfo=useSelector((state)=>state.UserLogin? state.UserLogin.UserLogin[0]:null)
  console.log(UserLoginInfo.id);
  var ID=UserLoginInfo.id
  

  useEffect(() => {
    async function collectProduct() {
      var response = await UserRequest.get('/Product/View-All-Product-Token')
      console.log(response.data);
      setAllProduct(response.data)

    }
    collectProduct()
  }, [])

  async function AddToCart(cart) {
    console.log(cart);
    await AddCart({cart,ID})
    
  }

  return (
    <div>
      {
        allProduct.map((item)=>(
          <div className='Product_card'>
            <img src={`/Images/${item.productImage}`} alt="{item.productImage}" height={'310px'} width={'310px'} />
            <h1>Name:{item.productName}</h1>
            <h1>Price:{item.productPrice}$ </h1>
            <button className='addtocart_button' onClick={()=>{AddToCart(item)}}>Add To Cart</button>

          </div>


        ))
      }
    </div>
  )
}

export default UserHome