import React from 'react'
import successLogo from './successLogo.png'
import { Link } from 'react-router-dom';

function SuccessMessage() {
    return (
        <div className='success-message-container'>
            <div className='checkout-success-message'>
                <img width="300" src={successLogo}></img>
                <h1>Successfully ordered!</h1>
                <p>Your new shoes will now be with you shortly!</p>
                <Link to='/products'><button className='product-btn p-btn1'>Back to shop</button></Link>
            </div>
        </div>
    );
};

export default SuccessMessage;