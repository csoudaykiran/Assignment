import React, { useContext, useState } from 'react'
import NavbarComp from './NavbarComp'
import Footer from './Footer'
import UserContext from './UserContext';

function Cart() {
    const context = useContext(UserContext);
    const [tcart,setTCart] = useState (context.cartList);
    const [count,setCount] = useState(tcart.length);
    const totalCost = context.cartList.reduce((total,product) =>{
      return total + (product.fields.price * product.quantity);
    },0);
    console.log(context.cartList,'hi')
    
    const totalCostStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    };
  return (
    <>
     <NavbarComp/>
     <div class="container ">
  <div class="row">
    <div class="col cart-items mx-1">
      {tcart.length>1?tcart.map(product=>
      <div class="row w-100 mt-1 cart-item">
      <div className="col my-3 ">
        <img src={product.fields.product_Main_Img_URL} alt=""  width="100px" height="100px"/>
      </div>
      <div className="col my-4 text-start">
      <div >Name: <span className='text-info' > {product.fields.name} </span></div>
      <div>Price:<span className='text-info' > ${product.fields.price} </span> </div>
      <div>Quantity:<span className='text-info' > {product.quantity} </span></div>
      
      <button className='btn btn-danger' onClick={() => { console.log(product);context.deleteItem(product); setCount((prev)=>prev-1) }}>Delete</button>
      </div>
      </div>) : <div style={{height:'250px'}} className='text-center w-50 mx-auto'><h1>No Items Found</h1></div>}
    </div>
  
  </div>
  <div className='text-end mt-3'>
    <h3 className='text-info'>Total Cost :</h3>
    <h2 className='text-success'>${totalCost.toFixed(2)}</h2>
  </div>
</div>
     <Footer/> 
    </>
  )
}

export default Cart
