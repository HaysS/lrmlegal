import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div id="footer" className="container">
    <div className="title">
      <Link to="/contact/" className="blank-link">
        <h2>Get in touch</h2>
        <span className="byline">Contact me about anything. I'll get back to you soon.</span> 
      </Link>
    </div>
    <ul className="contact">
      <li><a href="https://twitter.com/elonmusk" className="icon icon-twitter" target="_blank"><span>Twitter</span></a></li>
      <li><a href="https://www.facebook.com/ermusk/" className="icon icon-facebook" target="_blank"><span></span></a></li>
      {/* <li><a href="#" className="icon icon-dribbble" target="_blank"><span>Pinterest</span></a></li> */}
      {/* <li><a href="#" className="icon icon-tumblr" target="_blank"><span>Google+</span></a></li> */}
      {/* <li><a href="#" className="icon icon-rss" target="_blank"><span>Pinterest</span></a></li> */}
    </ul>
  </div>
)

export default Footer
