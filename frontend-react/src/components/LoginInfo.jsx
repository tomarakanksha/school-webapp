import React, { useState } from 'react';
import "./LoginStyles.css";
import { Form } from "react-bootstrap";

const LoginInfo = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const validateForm = () => {
    let newErrors = { email: '', password: '' };

    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

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
      <div className="login-form">
        <h1>Login Here!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
            />
            <div className='error'>{errors.email}</div>
          </div>

          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              id="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
            />
            <div className='error'>{errors.password}</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginInfo;
