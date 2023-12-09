import "./ContactForm.css";
import { Form, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ fullName: '', email: '', subject: '', message: '' });

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let newErrors = { fullName: '', email: '', subject: '', message: '' };

    // Full Name validation
    if (!form.fullName) {
      newErrors.fullName = 'Full Name is required';
    }

    // Email validation
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Subject validation
    if (!form.subject) {
      newErrors.subject = 'Subject is required';
    } else if (!/^[a-z0-9\s]+$/i.test(form.subject)) {
      newErrors.subject = 'Subject must be alphanumeric';
    }

    // Message validation
    if (!form.message) {
      newErrors.message = 'Message is required';
    } else if (!/^[a-z0-9\s]+$/i.test(form.message)) {
      newErrors.message = 'Message must be alphanumeric';
    }

    setErrors(newErrors);

    // If no errors, form is valid
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form is valid');
      // Submit form
    } else {
      console.log('Form is invalid');
    }
  };
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
            <Form onSubmit={handleSubmit}>
              <label>FullName</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleInputChange} required placeholder="Write your Full Name" />
              <div className="error">{errors.fullName}</div>

              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleInputChange} required placeholder="Write your Email" />
              <div className="error">{errors.email}</div>

              <label>Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleInputChange} required placeholder="Write a Subject" />
              <div className="error">{errors.subject}</div>

              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleInputChange} required placeholder="Write a message" rows="4"></textarea>
              <div className="error">{errors.message}</div>

              <button type="submit">Send</button>

            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
