import React, { useEffect, useState } from 'react'
import useCartHandler from '../components/CartHandler';

function Checkout() {

  const [cart, setCart] = useCartHandler();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ProductData = cart.map(item => getProduct(item.id));
    Promise.all(ProductData).then(result => setProducts(result));
  }, []);

  async function getProduct(id) {
    let resp = await fetch(`https://codexplained.se/shoes.php?id=${id}`);
    let data = await resp.json();
    return data;
  };

  let totalCost = 0;

  let productHTML = products
  .map(product =>{
    let cartItem = cart.find( q => q.id == product.id);
    product.quantity = cartItem.quantity;
    product.total = product.price * product.quantity;
    totalCost += product.total;
    return product;
  })
  .map(product => {
    
    return(
      <div className='checkout-product' key={product.id}>
        <h4>{product.title}</h4>
        <div>Unit price: {product.price}:-</div>
        <div>Quantity: {product.quantity}</div>
        <img height="200" src={product.url}></img>
        <div>Total price: {product.total}:-</div>
      </div>
    );
  });

  const noItemsHTML = (<div>No items</div>);
  
  return (
    <div className='checkout-container'>
      <div>{cart.length ? productHTML : noItemsHTML}</div>
      <h3>Sub total: {totalCost}:-</h3>
      <form className='checkout-form'>
        <div className='input-group'>
          <h5 className='checkout-input-title'>First name</h5>
          <input className='checkout-input' placeholder='First name'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>Last name</h5>
          <input className='checkout-input' placeholder='Last name'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>Your email</h5>
          <input className='checkout-input' placeholder='Your email'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>Your Phone</h5>
          <input className='checkout-input' placeholder='Your Phone'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>Country</h5>
          <input className='checkout-input short-input' placeholder='Country'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>City</h5>
          <input className='checkout-input short-input' placeholder='City'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>Zip code</h5>
          <input className='checkout-input short-input' placeholder='Zip code'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>State</h5>
          <input className='checkout-input' placeholder='State'></input>
        </div>
        <div className='input-group'>
          <h5 className='checkout-input-title'>Address</h5>
          <input className='checkout-input' placeholder='Address'></input>
        </div>
      </form>

      <div className='card-details-container'>
        <form>
          <div>
            <h3>Card number</h3>
            <input className='card-details-input' placeholder='0000'></input>
            <input className='card-details-input' placeholder='0000'></input>
            <input className='card-details-input' placeholder='0000'></input>
            <input className='card-details-input' placeholder='0000'></input>
          </div>

          <div>
            <h5>Expire date</h5>
            <input className='card-details-input' placeholder='MM/YY'></input>
          </div>

          <div>
            <h5>CVV</h5>
            <input className='card-details-input' placeholder='000'></input>
          </div>
        </form>
      </div>
      <div className='submit-button-container'>
        <button className='submit-purchase-button'>Submit purchase</button>
      </div>
    </div>
  );
};

export default Checkout;