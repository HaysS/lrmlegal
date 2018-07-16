import React from "react";

import Profile from '../components/profile';
import SidebarForm from '../components/sidebar-form';

import '../styles/blog-listing.css';

const Contact = () => {
  return (
    <div id="col-wrapper">
      <div id="contact-section" className="column left">
  		<SidebarForm title={"Free Consultation Here"}/>
      </div>
      <div className="column right">
      	<Profile />
      </div>
    </div>
  );
}

export default Contact