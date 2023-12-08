import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../Assets/aboutus.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About Us" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
