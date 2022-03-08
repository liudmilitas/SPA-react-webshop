import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header from '../components/Header.js'
import ProductCard from '../components/ProductCard.js'

function Products(props) {
  const urlAPI = "https://codexplained.se/shoes.php"
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  });

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    })
    axios.get(urlAPI)
      .then(response => {
        setProducts({
          loading: false,
          data: response.data,
          error: false
        })
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true
        })
      })
  }, [urlAPI])

  let content = null;

  if(products.error){
    content = <p>
      Yikes! An Error! Try again later!
    </p>
  }

  if(products.loading){
    content = <p>
      Loading...
    </p>
  }

  if(products.data){
    content = 
    products.data.map((product, key) => 
      
        <ProductCard
          product={product}
          addProductToCart={props.addProductToCart}
          setShowCart={props.setShowCart}
        />
    )
  }

  return (
    <div>
      
      <h2 className='products-h2-heading'>Best sellers</h2>
      <div className='product-list-container'>
      <ul className='product-list'>
        {content}
      </ul>
      </div>
    </div>
  )
}

export default Products