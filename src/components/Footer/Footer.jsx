import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={`${style["footer-wrapper"]}`}>
      <div
        className={`paddings inner-width flex-center ${style["footer-container"]}`}
      >
        {/* //* LEFT SIDE */}
        <div className={`flex-col-start ${style["footer-left"]}`}>
          <img src="./logo2.png" alt="" width={120} />
          <span className={`secondary-text`}>
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* //* RIGHT SIDE */}
        <div className={`flex-col-start ${style["footer-right"]}`}>
          <span className={`primary-text`}>Information</span>
          <span className={`secondary-text`}>145 New York, FL 5467, USA</span>

          <div className={`flex-center ${style.menu}`}>
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
