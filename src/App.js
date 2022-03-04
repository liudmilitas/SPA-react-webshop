import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer';
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout';


function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Products}/>
      <Route path="/product/:id" component={Product}/>
      <Route path="/checkout" component={Checkout}/>
      <Footer />
    </div>
  );
}

export default App;
