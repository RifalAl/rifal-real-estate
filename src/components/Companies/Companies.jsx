import React from "react";
import styles from "./Companies.module.css";
const Companies = () => {
  return (
    <section className={`${styles["companies-wrapper"]}`}>
      <div
        className={`paddings inner-width flex-center ${styles["companies-container"]}`}
      >
        <img src="./prologis.png" alt="proligis" />
        <img src="./tower.png" alt="tower" />
        <img src="./equinix.png" alt="equinis" />
        <img src="./realty.png" alt="reality" />
      </div>
    </section>
  );
};

export default Companies;
