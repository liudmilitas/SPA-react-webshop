import React from 'react'

function ProductCard(props) {
  return (
    <div>
      {props.product.title}
      {props.product.price}
    </div>
  )
}

export default ProductCard