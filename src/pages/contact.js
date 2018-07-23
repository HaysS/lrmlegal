import React from "react";

import ProfilePreview from '../components/profile-preview'
import ContactForm from '../components/contact-form';

import '../styles/blog-listing.css';

const Contact = () => {
  return (
    <div id="col-wrapper">
      <div id="contact-section" className="column left">
  		<ContactForm title={"Get In Touch With Us Now."}/>
      </div>
      <div className="column right">
      	<ProfilePreview />
      </div>
    </div>
  );
}

export default Contact