import React from "react";
import style from "./SectionTitle.module.css";

const SectionTitle = ({ alignCenter, subTitle, title, des }) => {
  return (
    <div
      className={`flex-col-start ${style["title-wrapper"]} ${
        alignCenter && "align-center"
      }`}
    >
      <span className={`orange-text`}>{subTitle}</span>
      <span className={`primary-text`}>{title}</span>
      <span className={`secondary-text ${style["title-description"]}`}>
        {des}
      </span>
    </div>
  );
};

export default SectionTitle;
