import React from "react";
import "./about.css";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/Bahaa_cv.pdf";

const about = () => {
  return (
    <section className="about section" id="about">
      <h3 className="section__title">About Me</h3>
      <span className="section__subtitle">Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImage} alt="" className="about__image" />
      </div>
    </section>
  );
};

export default about;
