import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceImg from "../Assets/1.png";
import Footer from "../components/Footer";
import Tour from "../components/Achievement";
import serviceQuote from "../Assets/service.jpg";
import "../components/ServiceStyle.css";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={serviceQuote}
        title="Our Services"
        text="At BrainTree Academy, we offer comprehensive educational programs that prepare students for success in life. Our team of experienced educators and educators work closely with students to create a personalized learning experience that is tailored to their unique needs and interests."
        btnClass="hide"
      />
      <Footer />
    </>
  );
};

export default Service;
