import React from "react";
import "./AboutStyles.css";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <h2 style = {{ textAlign: "center"}}>Welcome to BrainTree Academy!</h2>
        <h3 style={{ textAlign: "center", fontSize: "20px", fontWeight: "normal", fontStyle: "bold" }}>
        At BrainTree Academy, we are passionate about education and preparing our students for the future. Our dedicated team of educators is committed to providing the highest quality of learning experiences. Whether it's through our engaging curriculum, our personalized approach to teaching, 
        or our innovative learning technologies, we strive to create an environment where every student can thrive. <br />
         </h3>
         <p  style = {{ textAlign: "center"}}> <br /> We believe that education is more than just acquiring knowledge. It's about nurturing curious minds, fostering critical thinking, and developing lifelong learners. Our goal is to empower our students with the skills, knowledge, and confidence they need to succeed in an ever-changing world.

Join us at BrainTree Academy and embark on a journey of growth, discovery, and limitless possibilities. Together, we can build a brighter future.
        </p>
        
      </div>
    </>
  );
};

export default AboutUs;
