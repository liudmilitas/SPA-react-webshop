import React from 'react'
import { cartTotal } from '../App';


function Cart(props) {
  //TODO: Write styling for sliding in the cart
  return (
    <div className='cart-overlay' style={{visibility: props.showCart ? "visible" : "hidden"}}>
      <div className='cart-wrapper'>
        <button className='cart-buttons' onClick={() => {
          props.setShowCart(false)
        }}>Hide (X)</button>
        {props.cart.length ? <p><strong>Cart contents:</strong></p> : <p>Oops! Your cart is all empty!</p>}
        {props.cart.map(item => (
          <div className='single-cart-product' key={item.id}>
            <img className='cart-product-image' src={item.url} alt={item.title} />
            <p>{item.title} x {item.quantity}</p>
          </div>
        ))}
        <p className='cart-total'>Total: {cartTotal(props.cart)} $</p>
        <a className='cart-link-to-checkout' href='/checkout'>Go to Checkout</a><br />
        <button className='cart-buttons' onClick={props.clearTheCart}>Clear Cart</button>
      </div>
      </div>
  )
}

export default Cart