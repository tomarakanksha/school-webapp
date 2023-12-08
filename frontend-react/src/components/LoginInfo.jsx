import React from "react";
import "./LoginStyles.css";
import { Form } from "react-bootstrap";

const LoginInfo = () => {
  return (
    <>
      <div className="login-form">
        <h1>Login Here!</h1>
        <Form>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};

export default LoginInfo;
