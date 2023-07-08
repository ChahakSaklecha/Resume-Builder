import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Input Personal Information</h1>
      <div className="contact-form-container">
        <input type="string" placeholder="template_id" />
        
      </div>
      <div className="personal-info-container">
        <input type="object" placeholder="name" />
        <input type="object" placeholder="email_address" />
        <input type="object" placeholder="phone_number" />
        <input type="object" placeholder="linkedin_url" />
        
      </div>
      <div className="contact-form-container">
        <input type="string" placeholder="job_title" />
      </div>
      <div className="contact-form-container">
        <input type="string" placeholder="career_objective" />
      </div>
      <div className="contact-form-container">
        <input type="array of string" placeholder="skills" />
      </div>
      <div className="contact-form-container">
        <input type="array of object" placeholder="education" />
      </div>
      <div className="contact-form-container">
        <input type="array of object" placeholder="experience" />
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="achievements" />
      </div>
      <button className="secondary-button">Submit</button>
    </div>
  );
};

export default Contact;
