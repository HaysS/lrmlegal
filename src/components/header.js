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
          <li>
            <Link to="/" activeClassName="current_page_item">Homepage</Link>
          </li>
          <li>
            <Link to="/about-us/" activeStyle="">About Us</Link>
          </li>
          <li>
            <Link to="/" activeStyle="">Testimonials</Link>
          </li>
          <li>
            <Link to="/" activeStyle="">Contact Us</Link>
          </li>
          {/*<li><a href="#" accesskey="2" title=""></a></li>
          <li><a href="#" accesskey="3" title=""></a></li>
          <li><a href="#" accesskey="5" title=""></a></li>*/}
        </ul>
      </div>
    </div>
  </div>
)

export default Header
