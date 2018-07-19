import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

import '../styles/fonts.css'
import '../styles/index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' }, //Write a site description
        { name: 'keywords', content: 'sample, something' }, //Write better keywords
      ]}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    </Helmet>
    <div id="wrapper1">
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
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
