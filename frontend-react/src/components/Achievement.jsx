import React from "react";
import "./AchievementStyles.css";
import TourData from "./AchievementData";
import Tour1 from "../Assets/school1.jpeg";
import Tour2 from "../Assets/school2.jpg";
import Tour3 from "../Assets/school3.jpg";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Recent Achievements</h1>
        <p className="font-sofias tagline">
        Celebrating the journey of learning and achievement. Explore our gallery of educational milestones and accomplishments.
        </p>
        <div className="tourCard">
          <TourData
            image={Tour1}
            heading="Class XII"
            text="Celebration of academic excellence for Class XII, with awards and recognition. "
          />
          <TourData
            image={Tour2}
            heading="Class X"
            text="Students cheerfully celebrate our Class X results. "
          />
          <TourData
            image={Tour3}
            heading="Play School"
            text="Play School students having fun and learning. Celebrating festivals and special days "
          />
        </div>
      </div>
    </>
  );
};

export default Tour;
