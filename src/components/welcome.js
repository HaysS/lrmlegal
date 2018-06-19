import React from 'react'
import Link from 'gatsby-link'

import '../styles/index.css'

const Header = () => (
  <div id="wrapper2">
    <div id="welcome" className="container">
        <div className="left-col">
          <img id="welcome-photo" src={require("../images/lrm-headshot.jpg")} />
        </div>
        <div className="right-col">
          <div className="title">
            <h2>Renowned Attorney. Experienced Background.</h2>
          </div>
          <p>Leo is a nationally respected trial attorney known for his skill in assessing the legal requirements for business professionals. Leo has helped an incredible amount of businesses navigate their legal needs. Whether you need assistance capturing and finalizing contract terms, reviewing technology service agreements, or just general advice, Leo has your back.</p>
        </div>
    </div>
  </div>
)

export default Header
