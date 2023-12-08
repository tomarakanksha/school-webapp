import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import signup from "../Assets/notfound.jpg";
import Footer from "../components/Footer";
import LoginInfo from "../components/LoginInfo";

const Login = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={signup} title="" btnClass="hide" />
      <Footer />
    </>
  );
};

export default Login;
