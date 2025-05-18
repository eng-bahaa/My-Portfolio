import React from "react";
import "./home.css";
import Social from "./social";

const Home = () => {
  return (
    <section className="home" id="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Home;
