import React from "react";

import Testimonial from '../components/testimonial'
import SidebarForm from '../components/sidebar-form';

import '../styles/blog-listing.css';

const Testimonials = () => {
  return (
    <div id="col-wrapper">
      <div className="column left">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
      <div className="column right">
      	<div id="sidebar-section">
          <SidebarForm title="Free Consultation"/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials