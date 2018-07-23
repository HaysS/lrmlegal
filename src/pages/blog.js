import React from "react";
import Link from "gatsby-link";

import ContactForm from '../components/contact-form';

import '../styles/blog-listing.css';

const Blog = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark;

  posts.forEach(({ node: post }) => {
    console.log(post.frontmatter)
  })

  return (
    <div id="col-wrapper">
      <div className="column left">
        <div id="blog-posts" className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="column right">
        <div id="sidebar-section">
          <ContactForm title="Free Consultation"/>
        </div>
      </div>
    </div>
  );
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

