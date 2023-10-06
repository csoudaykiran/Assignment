import React, { useEffect, useState } from 'react'

import Footer from './Footer'
import NavbarComp from './NavbarComp'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/products/").then((data) => {
      console.log(data.data);
      setProducts(data.data);
    })},[])
  return (
    <div>
        <NavbarComp/>
        <div className="container">
        {products.length>0? <div class="mt-3 row row-cols-1 row-cols-md-4 g-4">
            
            {products.map( (product,index)=>
            <div key={index} class=" col-sm-6">
                <div class="card h-100">
                    <img src={product.fields.product_Main_Img_URL} class="card-img-top" alt="..." width={'300rem'} height={'300vh'} />
                    <div class="card-body">
                        <h6 class="card-title">{product.fields.name}</h6>
                        <div class="frame-parent1">
                            <div class="star-parent ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                    <path d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z" fill="#FFC633" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                                    <path d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z" fill="#FFC633" />
                                </svg>
                                <span> 4.5/</span>
                                <span class="span">5</span>
                            </div>
                            <div className='mt-3' >
                             <span className="price">${product.fields.price}</span>
                            </div>
                        </div>
                        <Link className='btn btn-primary' to={'/products/'+ product.pk}>Buy Now</Link>
                    </div>

                </div>
            </div>)}
           
        </div>:<h1>No products found</h1>}
        </div>
          <Footer/>
    </div>
  )
}

export default ProductList
