import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useCartHandler from '../components/CartHandler';

function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://codexplained.se/shoes.php?id=${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(err => {
        console.log(err);
      })
  }, []);

  /* function addToCart(){
    useCartHandler();
  }

  function shopNow(){
    
  } */

  return (
    <div className='product-container'>
      <h1 className='product-title'>{product?.title}</h1>
      <div className='product-group1'>
        <div className='product-description'>{product?.description}</div>
        <div className='product-storage'>In stock: {product?.storage}</div>
        <div className='product-group2'>
          <h2 className='product-price'>{product?.price}:-</h2>
          <button className='product-btn p-btn1'>Add to cart</button>
          <button className='product-btn p-btn2'>Shop now</button>
        </div>
      </div>
      <img className='product-img' src={product?.url}></img>
    </div>
  );
};

export default Product;