import React from 'react'
import Link from 'gatsby-link'

import Menu from './menu'

const Header = () => (
  <div>
    <div id="header-wrapper">
      <div id="header" className="container">
        <div id="logo">
          <a href="#"><h2>The Law Office Of </h2><br /><h1>Leo R. Morales</h1></a>
          <span>Smart Lawyer. Fast Results.</span> </div>
      </div>
    </div>
    <Menu />
  </div>
)

export default Header
