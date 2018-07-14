import React from "react";
import Link from "gatsby-link";

import Welcome from '../components/welcome'
import Portfolio from '../components/portfolio'

import '../styles/blog-listing.css';

export default function Index() {
  return (
    <div>
      <Welcome />
      <Portfolio />
    </div>
  );
}