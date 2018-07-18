import React from "react";

import Testimonial from '../components/testimonial'

import '../styles/blog-listing.css';

const Testimonials = () => {
  return (
    <div id="col-wrapper">
      <div className="column left">
        <Testimonial />
      </div>
      <div className="column right">
      	<div id="sidebar-section">
        </div>
      </div>
    </div>
  );
}

export default Testimonials