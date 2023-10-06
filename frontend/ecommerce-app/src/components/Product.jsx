import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserContext from './UserContext';

function Product() {
  const params = useParams();
  const [product, setProduct] = useState()
  const [quantity,setQuantity]=useState(1)
  const context = useContext(UserContext);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/products/"+params.id+"/").then((data) => {
      console.log(data.data[0]);
      setProduct(data.data[0]);
    })
  }, [])
  function incrementCount(e) {
    console.log("alsdkfjalksjfd")
    setQuantity((prev)=>prev+1)
  }
  function decrementCount(e) {
    setQuantity((prev)=>prev-1)
  }
  function addToCart(e){
    setProduct(prev=>({...prev,quantity:quantity}))
    context.appendCart({...product,quantity:quantity})
    console.log(context.cartList,'after adding');
    window.alert('Item added to cart successfully');
  }
  return (
    <div class="container text-start">
      {product ? <div class="row">
        <div class="col align-items-center">
          <img className='mx-auto d-block rounded' src={product ? product.fields.product_Main_Img_URL : null} alt="product photo" width={'300px'} />
        </div>
        <div class="col">
          <div className="product-heading">
            {product.fields.name}
          </div>
          <div className="product-description">
            {product.fields.description}
          </div>
          <div class="star-parent mt-3">
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
          <p className='mt-2'>
            Catergory: {product.fields.category}
          </p>
          <div className="counter d-flex px-3 mt-4 rounded-pill">
          <button type="button" disabled={quantity<=1}  onClick={decrementCount} class="btn btn-dark ms-0 me-0  p-0 btn-sm rounded-circle ctr-button">-</button>
          <span className='mt-2 mx-3 fs-5'>{quantity}</span>
          <button type="button" onClick={incrementCount} class="btn btn-dark ms-0 me-0  p-0 btn-sm rounded-circle ctr-button">+</button>
          </div>
          <button type="button" onClick={addToCart}  class="btn btn-dark ms-0 mt-5">Add to Cart</button>
        </div>
      </div> : <h1>No product found</h1>}
      <Link to='/products' className="btn btn-dark mt-4">View More</Link>
    </div>
  )
}

export default Product
