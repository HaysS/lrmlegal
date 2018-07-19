import React from 'react'
import Link from 'gatsby-link'

const Portfolio = () => (
  <div id="wrapper3">
    <div id="portfolio" className="container">
      <div className="title">
        <h2>Dedicated to Your Success</h2>
        <span className="byline">Expert Advice. Trusted Assistance.</span> </div>
      <div className="row1">
        <div className="column1">
          <div className="box">
            <span className="icon icon-wrench"></span>
            <h3>Advisory Services</h3>
            <p>Consultation and advisory services for businesses and individuals seeking legal representation</p>
          </div>
        </div>
        <div className="column2">
          <div className="box">
            <span className="icon icon-trophy"></span>
            <h3>Corporate Services</h3>
            <p>Entity formation and start-up services, draft operating agreements, partnership agreements, employment agreements, and prepare tax filings</p>
          </div>
        </div>
        <div className="column3">
          <div className="box">
            <span className="icon icon-key"></span>
            <h3>Commercial Real Estate Transactions</h3>
            <p>Review and negotiate commercial real estate transactions for buyers, sellers, landlords, and tenants.</p><br />
          </div>
        </div>
        <div className="column4">
          <div className="box">
            <span className="icon icon-lock"></span>
            <h3>Technology Licensing</h3>
            <p>Review and negotiate software license agreements, provide technology volume license and compliance strategies, assist with audit prevention and defense.</p>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="column1">
          <div className="box">
            <Link to="/government-transactions" className="button button-small">Learn More</Link>
          </div>
        </div>
        <div className="column2">
          <div className="box">
            <Link to="/corporate-tech" className="button button-small">Learn More</Link>
          </div>
        </div>
        <div className="column3">
          <div className="box">
            <Link to="/debt-collection" className="button button-small">Learn More</Link>
          </div>
        </div>
        <div className="column4">
          <div className="box">
            <Link to="/software-licensing" className="button button-small">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
