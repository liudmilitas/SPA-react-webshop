import './App.css';
import { Route } from "react-router-dom";
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import SucessMessage from './components/SuccessMessage';
import Cart from "./components/Cart";
import useCartHandler from './components/CartHandler';
import Slider from './components/Slider';

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

    const clearTheCart = () => {
      setCart([])
    }

  return (
    <div className="App">
      <Header cart={cart} clearTheCart={clearTheCart} setShowCart={setShowCart}/>
      <Cart {...{cart, showCart, setShowCart, setProductQuantity, addProductToCart, clearTheCart}}/>
      <Route exact path="/" component={Slider}/>
      <Route exact path="/" render={() => <Products {...{cart, setShowCart, addProductToCart}}/>}/>
      <Route path="/product/:id" component={Product}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/successmessage" component={SucessMessage}/>
      <Footer />
    </div>
  );
}

export default App;
