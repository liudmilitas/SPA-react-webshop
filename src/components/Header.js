import React from 'react'
import {cartItemCount} from "../App.js";
import { Link } from 'react-router-dom'


const shoppingBag = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"/></g></svg>;

function Header(props) {
  return (
    <div className='header-wrapper'>
    <header>
      <div className='logo-wrapper'>
        <img className="logo-image" src="https://lun-eu.icons8.com/a/pJIDm4zeFk2DluqK2wZeKw/QYZyX1Ni50yoZAt61QP8DA/logo.png" alt="Clay Shop Logo"/>
        <h1>Clay Shop</h1>
      </div>
      <ul className='header-media-links'>
        <li>
          <a href="#">
          <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt=""/>
          </a>
        </li>
        <li>
          <a href="#">
          <img src="https://img.icons8.com/material/24/000000/twitter-squared.png" alt=""/>
          </a>
        </li>
        <li>
          <a href="#">
          <img src="https://img.icons8.com/material-outlined/24/000000/facebook-new.png" alt=""/>
          </a>
        </li>
      </ul>
      <div className="shopping-cart-wrapper">
        <button className='shopping-cart-button' onClick={() => {
          props.setShowCart(true)
        }}>{props.cart.length > 0 && cartItemCount(props.cart)}{}{shoppingBag}</button>
      </div>
    </header>
    <nav>
      <ul className='navigation-links'>
        <li>
          <Link to={'/'}><h2>Home</h2></Link>
        </li>
        <li>
          <a href="#"><h2>Blog</h2></a>
        </li>
        <li>
          <a href="#"><h2>Contact</h2></a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Header