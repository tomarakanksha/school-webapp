import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import signup from "../Assets/122.jpg";
import Footer from "../components/Footer";
import LoginInfo from "../components/LoginInfo";

const Login = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={signup} title="Login" btnClass="hide" />
      <LoginInfo />
      <Footer />
    </>
  );
};

export default Login;
