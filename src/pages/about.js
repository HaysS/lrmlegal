import React from 'react';

import Profile from '../components/profile';
import SidebarForm from '../components/sidebar-form';

import '../styles/blog-listing.css';
import '../styles/dual-column.css';

const About = () => {
  return (
    <div id="col-wrapper">
      <div className="column left">
      	<Profile />
      </div>
      <div className="column right">
      	<div id="sidebar-section">
          <SidebarForm title="Free Consultation"/>
        </div>
      </div>
    </div>
  );
}

export default About