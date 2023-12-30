import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../Ui/SectionTitle";
import SliderButton from "./SliderButton";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import styles from "./Residencies.module.css";

const Residencies = () => {
  return (
    <section className={`${styles["residences-wrapper"]}`}>
      <div
        className={`paddings inner-width ${styles["residencies-container"]}`}
      >
        <SectionTitle
          alignCenter={true}
          subTitle="Best Choice"
          title="Popular Residence"
        />

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={`flex-col-start ${styles["residencies-card"]}`}>
                <img src={item.image} alt={item.name} />
                <span
                  className={`secondary-text ${styles["residencies-price"]}`}
                >
                  <span style={{ color: "orange" }}>$</span>
                  <span>{item.price}</span>
                </span>
                <span className={`primary-text ${styles["residencies-name"]}`}>
                  {item.name}
                </span>
                <span
                  className={`secondary-text  ${styles["residencies-detail"]}`}
                >
                  {item.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
