import React from 'react'
import Link from 'gatsby-link'

import '../styles/index.css'

const Welcome = () => (
  <div id="wrapper2">
    <div id="welcome" className="container">
        {/*<div className="left-col">
          <img id="welcome-photo" src={require("../images/lrm-headshot.jpg")} />
        </div>*/}
        <div className="right-col" style={centerColumn}>
          <div className="title">
            <h2 style={centerText}>Renowned Attorney.<br />Experienced Background.</h2>
          </div>
          <p style={centerText}>Leo is a nationally respected trial attorney known for his skill in assessing the legal requirements for business professionals. Leo has helped an incredible amount of businesses navigate their legal needs. Whether you need assistance capturing and finalizing contract terms, reviewing technology service agreements, or just general advice, Leo has your back.</p>
        </div>
    </div>
  </div>
)

export default Welcome

const centerText = {
  textAlign: 'center',
}

const centerColumn = {
  float: 'none',
  padding: '0 0',
  width: '80%',
  margin: '0 auto',
}
