import React from "react";
import styles from "./SliderButton.module.css";
import { useSwiper } from "swiper/react";

const SliderButton = () => {
  const swiper = useSwiper();
  const previousHandler = () => {
    swiper.slidePrev();
  };
  const nextHandler = () => {
    swiper.slideNext();
  };
  return (
    <div className={`flex-center ${styles["residencies-buttons"]}`}>
      <button onClick={previousHandler}>&lt;</button>
      <button onClick={nextHandler}>&gt;</button>
    </div>
  );
};

export default SliderButton;
