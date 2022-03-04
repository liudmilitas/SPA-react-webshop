import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product({ setCart }) {

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

  //★☆

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