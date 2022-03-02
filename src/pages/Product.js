import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
      <div>{product?.description}</div>
      <div>{product?.category}</div>
      <img src={product?.image}></img>
    </div>
  );
};

export default Product;