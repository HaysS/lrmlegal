import React from 'react';

import '../styles/blog-listing.css';
import '../styles/dual-column.css';

const Success = () => {
  return (
    <div id="col-wrapper">
      <div className="column left">
      	<div id="profile">
  		    <h1 id="profile-title">Success! Thanks for Reaching Out!</h1>
  		    <div id="profile-body">
  		      <p id="profile-text">
              We've successfully received your message and will get back to you shortly.
  		        <br /><br />
  		      </p>
  		    </div>
  		  </div>
      </div>
      <div className="column right">
      	<div id="sidebar-section">
        </div>
      </div>
    </div>
  );
}

export default Success