import './App.css';
import { Route } from "react-router-dom";
import React, { useState } from 'react';
import Footer from './components/Footer';
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Cart from "./components/Cart";
import useCartHandler from './components/CartHandler';

export const cartItemCount = (cart) => {
  //Calculate the total number of items in the cart
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const cartTotal = (cart) => {
  //Calculate the total price of the items in the cart
  return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

function App() {

    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useCartHandler();

    const addProductToCart = (product, quantity = 1) => {
        if (cart.find(item => item.id === product.id)) {
            setCart(cart.map(item => {
                if (item.id === product.id) {
                    item.quantity += quantity;
                }
                return item;
            }));
        } else {
            setCart([...cart, {...product, quantity: quantity}]);
        }
    }

    const setProductQuantity = (product, quantity) => {
        if (quantity < 1) {
            setCart(cart.filter(item => item.id !== product.id));
        }
        setCart(cart.map(item => {
            if (item.id === product.id) {
                item.quantity = quantity;
            }
            return item;
        }));
    }

  return (
    <div className="App">
      <Cart {...{cart, showCart, setShowCart, setProductQuantity, addProductToCart}}/>
      <Products {...{cart, setShowCart, addProductToCart}}/>
       {/*Sorry, had to comment this line out (for now) because it was breaking everything
       <Route exact path="/" component={Products}/>*/}
      <Route path="/product/:id" component={Product}/>
      <Route path="/checkout" component={Checkout}/>
      <Footer />
    </div>
  );
}

export default App;
