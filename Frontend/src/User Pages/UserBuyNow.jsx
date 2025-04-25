import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { UserRequest } from '../Axios/AxiosCreate';
import { useNavigate } from "react-router-dom";
import { CreateOrder } from '../Api/UserApis';

function UserBuyNow() {
    var { state: product } = useLocation()
    console.log(product);
    const { fullname, email, phone, _id: userId } = product.userId
    const navigate =useNavigate()

    const [deliveryDetails, setDeliveryDetails] = useState({
        address: '',
        city: '',
        state: '',
        pincode: '',
        phone: phone
    })

    // collecting address details
    function collectionDetails(e) {
        const { name, value } = e.target
        setDeliveryDetails((preview) => ({
            ...preview,
            [name]: value
        }))

    }

    const handlePayment = async () => {
console.log(product);

        try {
            const { data, fulladdress } = await CreateOrder({product, user: { fullname, _id: userId },deliveryDetails});
        


            var {id:id,amount}= data
            var amount = amount*100
            var razorpay=new window.Razorpay({
                key:'rzp_test_zMkHl0vrZKEDGj',
                amount,
                currency:'INR',
                description:'Test transaction',
                image:'nothoing',
                id,
                handler:(response)=>{
                    alert('payment successful! Transaction ID '+ response.razorpay_payment_id),
                    navigate('/Orders')

                },
                prefill:{
                    name:fullname,
                    contact:deliveryDetails.phone
                },
                notes:{
                    address:fulladdress
                },
                theme:{color:'#3399c'}

            })
            razorpay.open()
            

        } catch (error) {
            console.log("error from handle payment", error);

        }
    }


    return (
        <div>

            <h2>BUY NOW</h2>
            <div style={{ width: '90%', border: '1px solid black', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                <h3>Product details</h3>
                <img style={{ width: '90%', border: '1px solid black', padding: '20px', borderRadius: '10px' }} src={`../../public/Images/${product.productImage}`} alt=" image" />
                <p> <strong>Name:</strong> {product.proproductName} </p>
                <p> <strong>Company</strong> {product.productCompany} </p>
                <p> <strong>Price</strong> {product.productPrice} </p>
            </div>

            <div style={{ width: '90%', border: '1px solid black', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                <h3>Customer Details</h3>
                <p> <strong>Name:</strong> {fullname}</p>
                <p> <strong>Email:</strong> {email}</p>
                <p> <strong>Phone:</strong> {phone}</p>
            </div>

            <div style={{ width: '90%', border: '1px solid black', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                <div style={{ marginTop: '10px', fontSize: '20px' }}>
                    <label htmlFor="address">Address</label>
                    <input type="text"
                        placeholder='Enter your address'
                        style={{ fontSize: '17px', padding: '3px' }}
                        name='address'
                        onChange={collectionDetails}

                    />
                </div>

                <div style={{ marginTop: '10px', fontSize: '20px' }}>
                    <label htmlFor="city">City</label>
                    <input type="text"
                        placeholder='Enter your city'
                        style={{ fontSize: '17px', padding: '3px' }}
                        name='city'
                        onChange={collectionDetails}
                    />
                </div>

                <div style={{ marginTop: '10px', fontSize: '20px' }}>
                    <label htmlFor="state">State</label>
                    <input type="text"
                        placeholder='Enter your state'
                        style={{ fontSize: '17px', padding: '3px' }}
                        name='state'
                        onChange={collectionDetails}
                    />
                </div>

                <div style={{ marginTop: '10px', fontSize: '20px' }}>
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text"
                        placeholder='Enter your pincode'
                        style={{ fontSize: '17px', padding: '3px' }}
                        name='pincode'
                        onChange={collectionDetails}
                    />
                </div>
                <button onClick={handlePayment}>Buy now</button>


            </div>



        </div>
    )
}

export default UserBuyNow
