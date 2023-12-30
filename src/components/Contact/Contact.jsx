import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import { MdVideoCameraFront } from "react-icons/md";
import React from "react";
import SectionTitle from "../Ui/SectionTitle";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`${styles["contact-wrapper"]}`}>
      <div
        className={`paddings inner-width flex-center ${styles["contact-container"]}`}
      >
        {/* // * LEFT SIDE */}
        <div className={`${styles["contact-left"]}`}>
          <SectionTitle
            subTitle="Our Contact Us"
            title="Easy to contact us"
            des={
              "We always ready to help by providijng the best services for you.\n We beleive a good blace to live can make your life better"
            }
          />
          <div className={`flex-start ${styles["contact-modes"]}`}>
            {/* //* FIRST ROW */}
            <div className={`flex-col-start ${styles.row}`}>
              {/* //* FIRST MODE */}
              <div className={`flex-col-center ${styles.mode}`}>
                <div className={`flex-start`}>
                  <div className={`flex-center icon`}>
                    <MdCall size={25} />
                  </div>
                  <div className={`flex-col-start ${styles.detail}`}>
                    <span className={`primary-text ${styles["primary-text"]}`}>
                      Call
                    </span>
                    <span
                      className={`secondary-text ${styles["secondary-text"]}`}
                    >
                      081 242 081 999
                    </span>
                  </div>
                </div>
                <div className={`flex-center button ${styles.button}`}>
                  Call Now
                </div>
              </div>

              {/* //* SECOND MODE */}
              <div className={`flex-col-center ${styles.mode}`}>
                <div className={`flex-start`}>
                  <div className={`flex-center icon`}>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className={`flex-col-start ${styles.detail}`}>
                    <span className={`primary-text ${styles["primary-text"]}`}>
                      Chat
                    </span>
                    <span
                      className={`secondary-text ${styles["secondary-text"]}`}
                    >
                      081 242 081 999
                    </span>
                  </div>
                </div>
                <div className={`flex-center button ${styles.button}`}>
                  Chat Now
                </div>
              </div>
            </div>
            {/* //* SECOND ROW */}
            <div className={`flex-col-start ${styles.row}`}>
              {/* //* THIRD MODE */}
              <div className={`flex-col-center ${styles.mode}`}>
                <div className={`flex-start`}>
                  <div className={`flex-center icon`}>
                    <MdVideoCameraFront size={25} />
                  </div>
                  <div className={`flex-col-start ${styles.detail}`}>
                    <span className={`primary-text ${styles["primary-text"]}`}>
                      Video Call
                    </span>
                    <span
                      className={`secondary-text ${styles["secondary-text"]}`}
                    >
                      081 242 081 999
                    </span>
                  </div>
                </div>
                <div className={`flex-center button ${styles.button}`}>
                  Video Call Now
                </div>
              </div>

              {/* //* FOURTH MODE */}
              <div className={`flex-col-center ${styles.mode}`}>
                <div className={`flex-start`}>
                  <div className={`flex-center icon`}>
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className={`flex-col-start ${styles.detail}`}>
                    <span className={`primary-text ${styles["primary-text"]}`}>
                      Message
                    </span>
                    <span
                      className={`secondary-text ${styles["secondary-text"]}`}
                    >
                      081 242 081 999
                    </span>
                  </div>
                </div>
                <div className={`flex-center button ${styles.button}`}>
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // * RIGHT SIDE */}
        <div className={`flex-center ${styles["contact-right"]}`}>
          <div className={`img-container`}>
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
