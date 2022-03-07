import React from 'react'
import { cartTotal } from '../App';
import useCartHandler from '../components/CartHandler';


function Cart(props) {
  //TODO: Display a backdrop that, when clicked, closes the cart using props.setShowCart(false)
  //TODO: Write styling for sliding in the cart
  const [cart, setCart] = useCartHandler();
  return (
      <div style={{display: props.showCart ? "block" : "none"}}>
        <button onClick={() => {
          console.log("hiding cart...")
          props.setShowCart(false)
        }}>Hide</button>
        <p>Cart contents:</p>
        {cart.map(item => (
          <div key={item.id}>
            <img className='cart-product-image' src={item.url} alt={item.title} />
            <p>{item.title} x {item.quantity}</p>
          </div>
        ))}
        <p>Total: {cartTotal(props.cart)} $</p>
        <button>Go to Checkout</button>
        <button>Clear Cart</button>
      </div>
  )
}

export default Cart