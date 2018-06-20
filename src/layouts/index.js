import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Welcome from '../components/welcome'
import Portfolio from '../components/portfolio'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

import '../styles/index.css'
import '../styles/fonts.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div id="wrapper1">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Welcome />
      <Portfolio />
    </div>
    <Footer />
    <Copyright />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
