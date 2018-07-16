import React from "react";

import Profile from '../components/profile';
import SidebarForm from '../components/sidebar-form';

import '../styles/blog-listing.css';

const Contact = () => {
  return (
    <div id="col-wrapper">
      <div className="column left">
      	<div id="sidebar-section">
      		<SidebarForm />
      	</div>
      </div>
      <div className="column right">
      	<Profile />
      </div>
    </div>
  );
}

export default Contact