import React from "react";
import style from "./GetStarted.module.css";
const GetStarted = () => {
  return (
    <section className={`${style["g-wrapper"]}`}>
      <div className={`paddings inner-width ${style["g-container"]}`}>
        <div className={`flex-col-center ${style["inner-container"]}`}>
          <span className={`primary-text ${style["primary-text"]}`}>
            Get Started with Homyz
          </span>
          <span className={`secondary-text ${style["secondary-text"]}`}>
            Subscribe and find super attractive price quotes from us. <br />{" "}
            Find your residence soon
          </span>
          <button className={`button ${style.button}`}>
            <a href="mailto:aldi4rifaldi@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
