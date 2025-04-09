import React, { useState } from 'react'
import './AddProduct.css'
import AdminNavbar from '../Component/AdminNavbar'
import { AddProductAdmin } from '../Api/AdminApis'

function AddProduct() {
  const [preview, setPreview] = useState()
  const [productImage, setProductImage] = useState()
  const [product, setProduct] = useState({
    productname: '',
    productprice: '',
    productdis: '',
    productcompany:''
  })

  function handleimagechanges(e) {
    const file = e.target.files[0]
    setProductImage(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  function addData(e) {
    const { name, value } = e.target
    setProduct((preview) => ({
      ...preview,
      [name]: value
    }))

  }

  console.log(product);

  async function handleProductAdd(e) {
    if (productImage || product.productname || product.productprice || product.productdis) {
      e.preventDefault();
      const formdata = new FormData()
      formdata.append('productImage', productImage)
      formdata.append('productName', product.productname)
      formdata.append('productPrice', product.productprice)
      formdata.append('productDis', product.productdis)
      formdata.append('productCompany',product.productcompany)
  
      try {

        await AddProductAdmin(formdata)
  
      } catch (error) {
        console.log(error);
        alert('Product is not uploaded please try again')
  
      }

    }else{
      alert('write all the input field to add product')
    }

   


  }


  return (

    <div>
      <AdminNavbar />
      <section className='main_section_addproduct'>
        <div className='inner_section_addproduct'>

          <div className='image_upload'>
            <label htmlFor="" className='image_upload_label'>
              {
                preview ? (
                  <img src={preview} alt="" className='image_preview' />
                ) : (
                  <div className='image_upload_placeholder'>+</div>

                )
              }

            </label>

          </div>
          <input type="file"
            id='fileinput'
            className='product_add_inputs'
            required
            onChange={handleimagechanges} />

          <input type="text"
            placeholder='Enter Product Name'
            className='product_add_inputs'
            required
            name='productname'
            value={product.productname}
            onChange={addData}
          />
          <input type="text"
            placeholder='Enter Product Company Name'
            className='product_add_inputs'
            required
            name='productcompany'
            value={product.productcompany}
            onChange={addData}
          />

          <input type="number"
            placeholder='Enter product price'
            className='product_add_inputs'
            required
            name='productprice'
            value={product.productprice}
            onChange={addData}
          />

          <textarea type="text"
            placeholder='enter product description'
            className='product_add_textarea'
            required
            name='productdis'
            value={product.productdis}
            onChange={addData}
          />

          <button className='product_add_btn' onClick={handleProductAdd}>Add product</button>
        </div>

      </section>
    </div>
  )
}

export default AddProduct