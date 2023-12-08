import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImg from "../Assets/HomePage.jpg";
import Tour from "../components/Achievement";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div style={{  backgroundColor: "#efefef;"}}>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={homeImg}
        title="Welcome to BrainTree Academy!"
        text="Learn as you Grow!"
      />
      <Tour />
      <Footer />
      </div>
    </>
  );
};

export default Home;
