import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification-active button--flex">
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Design</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> 2021 - present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Art Director</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> 2021 - 2025
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> 2021 - 2025
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UX Expert</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> 2021 - 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
