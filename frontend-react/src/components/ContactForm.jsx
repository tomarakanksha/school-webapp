import React from "react";
import "./ContactForm.css";
import { Form, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <>
      <div className="container">
        <div className="contact-info">
          <h2 style={{ textAlign: "center" }}>Contact Information:</h2>
          
          <p style={{ textAlign: "center" }}> contact@braintreeacademy.com
            </p><p style={{ textAlign: "center" }}>
            (555) 555-5555
          </p><p style={{ textAlign: "center" }}>
            123 Main Street
            New York, NY 10001 </p>
            </div>
        <div className="form-container">
          <div className="form">
            <h1 style={{ textAlign: "center" }}>Send Message to Us!</h1>
            <Form>
              <label>FullName</label>
              <input type="text" placeholder="Write your Full Name" />
              <label>Email</label>
              <input type="email" placeholder="Write your Email" />
              <label>Subject</label>
              <input type="text" placeholder="Write a Subject" />
              <label>Message</label>
              <textarea placeholder="Write a message" rows="4"></textarea>
              <button type="button">Send</button>
            </Form>
            </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
