import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useCartHandler from '../components/CartHandler';
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCartHandler();

  useEffect(() => {
    fetch(`https://codexplained.se/shoes.php?id=${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => {
        console.log(err);
      })
  }, []);

  function addToCart(redirect) {

    let cartCopy = [...cart];

    let cartItem = cartCopy.find(item => item.id === Number(id));
    if (cartItem) {
      cartItem.quantity++;
      setCart(cartCopy);
    } else {
      setCart([...cart, {
        id: Number(id),
        quantity: 1
      }]);
    }

    if(redirect){
      window.location = '/checkout'
    } 
  };

  return (
    <div className='product-container'>
      <h1 className='product-title'>{product?.title}</h1>
      <div className='product-group1'>
        <div className='product-description'>{product?.description}</div>
        <div className='product-storage'>In stock: {product?.storage}</div>
        <div className='product-group2'>
          <h2 className='product-price'>{product?.price}:-</h2>
          <button onClick={() => addToCart(false)} className='product-btn p-btn1'>Add to cart</button>
          <button className='product-btn p-btn2' onClick={() => addToCart(true)}>Shop now</button>
        </div>
      </div>
      <img className='product-img' alt='product' src={product?.url}></img>
      <div className='ratings-container'>
        <hr></hr>
        <div className='ratings'>
          <h4>Ellen</h4>
          <label className='rating-stars'>★★★★☆</label>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Alias molestias quasi, autem itaque accusamus voluptatem consequatur fugiat sequi veritatis tenetur?</p>
        </div>
        <hr></hr>
        <div className='ratings'>
          <h4>Patricia</h4>
          <label className='rating-stars'>★★★★☆</label>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Alias molestias quasi, autem itaque accusamus voluptatem consequatur fugiat sequi veritatis tenetur?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Alias molestias quasi, autem itaque accusamus voluptatem consequatur fugiat sequi veritatis tenetur?</p>
        </div>
        <hr></hr>
        <div className='ratings'>
          <h4>Klara</h4>
          <label className='rating-stars'>★★★★★</label>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <hr></hr>
        <div className='ratings'>
          <h4>Pernilla</h4>
          <label className='rating-stars'>★★★☆☆</label>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Alias molestias quasi, autem itaque accusamus voluptatem consequatur fugiat sequi veritatis tenetur?</p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Product;