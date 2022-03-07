import React from 'react'
import { cartTotal } from '../App';
import useCartHandler from '../components/CartHandler';


function Cart(props) {
  //TODO: Display a backdrop that, when clicked, closes the cart using props.setShowCart(false)
  //TODO: Write styling for sliding in the cart
  return (
      <div style={{display: props.showCart ? "block" : "none"}}>
        <button onClick={() => {
          console.log("hiding cart...")
          props.setShowCart(false)
        }}>Hide</button>
        <p>Cart contents:</p>
        {props.cart.map(item => (
          <div key={item.id}>
            <img className='cart-product-image' src={item.url} alt={item.title} />
            <p>{item.title} x {item.quantity}</p>
          </div>
        ))}
        <p>Total: {cartTotal(props.cart)} $</p>
        <a href='/checkout'>Go to Checkout</a>
        <button onClick={props.clearTheCart}>Clear Cart</button>
      </div>
  )
}

export default Cart