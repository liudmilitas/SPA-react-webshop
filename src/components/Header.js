import React from 'react'

function Header() {
  return (
    <header>
      <img src="#" alt="Clay Shop Logo" className='logo-image'/>
      <h1>Clay Shop</h1>
      <ul className='header-media-links'>
        <li>
          <a>
          <img src="#" alt="Instagram" />
          </a>
        </li>
        <li>
          <a>
          <img src="#" alt="Twitter" />
          </a>
        </li>
        <li>
          <a>
          <img src="#" alt="Facebook"/>
          </a>
        </li>
      </ul>
      <div className="shopping-cart-wrapper">
        <button className='shopping-cart-button'></button>
      </div>
    </header>
  )
}

export default Header