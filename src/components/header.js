import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div id="header-wrapper">
    <div id="header" className="container">
      <div id="logo">
        <a href="#"><h2>The Law Office Of </h2><br /><h1>Leo R. Morales</h1></a>
        <span>Smart Lawyer. Fast Results.</span> </div>
      <div id="menu">
        <ul>
          <li className="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
          <li><a href="#" accesskey="2" title="">About Us</a></li>
          <li><a href="#" accesskey="3" title="">Testimonials</a></li>
          <li><a href="#" accesskey="5" title="">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
