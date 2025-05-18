import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a href="#home" className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i>instagram
      </a>
      <a href="#home" className="home__social-icon" target="_blank">
        <i class="uil uil-dribbble"></i>
      </a>
      <a href="#home" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
