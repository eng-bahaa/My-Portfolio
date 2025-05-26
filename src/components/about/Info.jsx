import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div>
      <div className="about__info grid">
        <div className="about__box">
          <i class="bx  bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">5 Years</span>
        </div>
        <div className="about__box">
          <i class="bx  bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">Projects</h3>
          <span className="about__subtitle">50+</span>
        </div>
        <div className="about__box">
          <i class="bx  bx-support about__icon"></i>
          <h3 className="about__title">Supprot</h3>
          <span className="about__subtitle">Online 24</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
