import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import UserContext from "./components/UserContext";


const cartList=[]
  function appendCart(product) {
    cartList.push(product)
  }

  const deleteItem = (item) =>{
    console.log(item);
    const indx = cartList.indexOf(item);
    cartList.splice(indx, 1);
  }
function App() {
  
  return (
    <div className="App">
   <UserContext.Provider
        value={{
          cartList,
          appendCart,
          deleteItem,
        }}
      >
    <Routes>
        
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/products' element={<ProductList/>}/>
    <Route exact path='/products/:id' element={<ProductDetail/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    </UserContext.Provider>
    </div>
  );
}

export default App;
