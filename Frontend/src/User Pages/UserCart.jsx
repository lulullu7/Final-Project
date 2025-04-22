import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GetCart, RemoveCartProduct } from '../Api/UserApis';
import './Home.css'

function UserCart() {

    const [cartData, setCartData] = useState([])

    // 
    var UserLoginInfo = useSelector((state) => state.UserLogin ? state.UserLogin.UserLogin[0] : null)
    console.log(UserLoginInfo.id);
    var ID = UserLoginInfo.id

    // getting data from useeffect hook
    async function getDataCart() {
        var data = await GetCart(ID)
        // saving data to state
        setCartData(data)
        


    }

    useEffect(() => {
        getDataCart()
    }, [])


    function RemoveProduct(ProductID) {
        RemoveCartProduct({ProductID,ID})
        
    }



    return (
        <div>
            {
                cartData.map((item, index) => (
                    <div className='Product_card'>
                        <img src={`/Images/${item.productImage}`} alt="{item.productImage}" height={'310px'} width={'310px'} />
                        <h1>Name:{item.productName}</h1>
                        <h1>Price:{item.productPrice}$ </h1>
                        <button className='addtocart_button' >Buy now</button>
                        <button className='addtocart_button' onClick={()=>{RemoveProduct(item._id)}} style={{backgroundColor:'red', marginBottom:'20px'}} >Remove</button>

                    </div>

                ))

            }
        </div>
    )
}

export default UserCart