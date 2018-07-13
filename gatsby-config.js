module.exports = {
  siteMetadata: {
    title: 'The Law Office of Leo R. Morales',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	'gatsby-plugin-catch-links',
  	{
  		resolve: 'gatsby-source-filesystem',
  		options: {
  			path: './src/pages', //Change initial file in path to ${__dirname} if have issues
  			name: 'pages',
  		},
  	},
  	'gatsby-transformer-remark',
  ],
}
