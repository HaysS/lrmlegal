import React from "react";

import Testimonial from '../components/testimonial'
import ContactForm from '../components/contact-form';

import '../styles/blog-listing.css';

const text1 = "Nulla tincidunt libero eget turpis lacinia mattis. Nulla eget nibh quis quam hendrerit euismod. Curabitur venenatis elementum urna, a fermentum turpis accumsan in. Mauris pellentesque, lacus non tempor imperdiet, leo tellus ullamcorper nisi, eu pharetra nisl erat ac sapien. Aenean euismod faucibus dui vel porta. Sed interdum magna ex, vitae pharetra dolor consectetur feugiat. Duis nec rutrum lacus. Aenean egestas nisl massa."

const Testimonials = () => {
  return (
    <div id="col-wrapper">
      <div className="column left">
        <Testimonial name={"Henry Johnson"} photo={"#"} text={text1} />
        <Testimonial name={"Jane Smith"} photo={"#"} text={text1} />
      </div>
      <div className="column right">
      	<div id="sidebar-section">
          <ContactForm title="Free Consultation"/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials