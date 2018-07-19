import React from "react";
import Helmet from "react-helmet";

import SidebarForm from '../components/sidebar-form';

export default function Template({data}) {
  const post = data.markdownRemark; 
  return (
    <div className="blog-post-container">
      <Helmet title={`Leo R. Morales - ${post.frontmatter.title}`} />

      <div id="col-wrapper">
          <div className="column left">
            <div id="blog-post" className="blog-post">
              <br />
              <h1>{post.frontmatter.title}</h1>
              <br />
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
            <br />
          </div>

          <div className="column right">
            <div id="sidebar-section">
              <SidebarForm title="Free Consultation"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`