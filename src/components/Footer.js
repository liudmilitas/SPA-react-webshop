import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <h3>Hot Links</h3>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='footer-links'>
        <h3>More info</h3>
        <ul>
          <li>How it works</li>
          <li>About us</li>
          <li>Decline rules</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
      <div className='footer-links'>
        <h3>Customer care</h3>
        <ul>
          <li>FAQ</li>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Discount system</li>
        </ul>
      </div>
      <div>
        <div className='footer-links'>
          <h3>Get newsletter</h3>
          <ul>
            <li>Get updates about new styles</li>
          </ul>
          <div className='footer-input-group'>
            <input type="text" className="footer-input" placeholder='Type your email...'></input>
              <button className="footer-button" type="button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;