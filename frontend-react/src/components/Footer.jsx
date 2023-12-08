import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h3>BrainTree Academy</h3>
            <Link className="link" to={`/contact`}>
              Contact Us
            </Link>
          </div>
          <div>
            <Link to={`/notFound`}>
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to={`/notFound`}>
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to={`/notFound`}>
              <i className="bi bi-twitter"></i>
            </Link>
          </div>
        </div>
        <div className="copy" style={{ textAlign: "center", fontSize: "10px", fontWeight: "normal", fontStyle: "bold" }}>
          Copyright ©BrainTreeAcademy2023.<br />
          All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
