import React from 'react'

function Cart(props) {
  //TODO: Display a backdrop that, when clicked, closes the cart using props.setShowCart(false)
  //TODO: Write styling for sliding in the cart
  return (
      <div style={{display: props.showCart ? "block" : "none"}}>
        <p>Cart contents:</p>
        {props.cart.map(item => (
          <p key={item.id}>{item.title} x {item.quantity}</p>
        ))}
      </div>
  )
}

export default Cart