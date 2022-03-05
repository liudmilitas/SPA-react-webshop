import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <li className="product-card">
        <img className="product-card-image" src={props.product.url} alt={props.product.description} />
    
        <h3>{props.product.title}</h3>
      <span>{props.product.price}$</span>
      <button>SEE DETAILS</button>
      <button onClick={() => {
          console.log("adding to cart", props.product)
          props.addProductToCart(props.product)
      }}>ADD TO CART</button>
    </li>
  )
}

export default ProductCard