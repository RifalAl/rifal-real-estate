import React from "react";
import style from "./GetStarted.module.css";
const GetStarted = () => {
  return (
    <section id="getStarted" className={`${style["g-wrapper"]}`}>
      <div className={`paddings inner-width ${style["g-container"]}`}>
        <div className={`flex-col-center ${style["inner-container"]}`}>
          <span className={`primary-text ${style["primary-text"]}`}>
            Get Started with Homyz
          </span>
          <span className={`secondary-text ${style["secondary-text"]}`}>
            Subscribe and find super attractive price quotes from us. <br />{" "}
            Find your residence soon
          </span>

          <a
            className={`button ${style["btn-cta"]}`}
            href="mailto:aldi4rifaldi@gmail.com"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
