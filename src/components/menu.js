import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div id="menu">
    <ul>
      <li>
        <Link to="/" activeClassName="current_page_item">Homepage</Link>
      </li>
      <li>
        <Link to="/about/">About Us</Link>
      </li>
      <li>
        <Link to="/testimonials/">Testimonials</Link>
      </li>
      <li>
        <Link to="/contact/">Contact Us</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      {/*<li><a href="#" accesskey="2" title=""></a></li>
      <li><a href="#" accesskey="3" title=""></a></li>
      <li><a href="#" accesskey="5" title=""></a></li>*/}
    </ul>
  </div>
)

export default Menu
