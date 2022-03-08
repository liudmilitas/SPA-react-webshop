import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <li className="product-card" key={props.product.id}>
        <img className="product-card-image" src={props.product.url} alt={props.product.description} />
    
        <h3>{props.product.title}</h3>
      <strong>{props.product.price}$</strong>
      <Link className='link-to-single-product' to={`/product/${props.product.id}`}>See Details</Link>
      <button className='add-to-cart-button' onClick={() => {
          console.log("adding to cart", props.product)
          props.addProductToCart(props.product)
      }}>ADD TO CART</button>
    </li>
  )
}

export default ProductCard