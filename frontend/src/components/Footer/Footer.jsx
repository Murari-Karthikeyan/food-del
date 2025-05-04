import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>bla bla bla kitchen this is just a dummy text</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+12-212-212</li>
                <li>support@darels.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">
    © 2025 Darel's Kitchen | Delicious flavors, unforgettable experiences | Contact: +123 456 7890 |
    </p>
    </div>
  )
}

export default Footer