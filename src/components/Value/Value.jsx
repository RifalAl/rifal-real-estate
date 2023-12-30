import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import React, { useState } from "react";

import { MdOutlineArrowDropDown } from "react-icons/md";
import SectionTitle from "../Ui/SectionTitle";
import data from "../../utils/accordion";
import styles from "./Value.module.css";

const Value = () => {
  return (
    <section className={`${styles["value-wrapper"]}`}>
      <div
        className={`paddings inner-width flex-center  ${styles["value-container"]}`}
      >
        {/* // * LEFT SIDE */}
        <div className={`${styles["value-left"]}`}>
          <div className={`img-container`}>
            <img src="./value.png" alt="value image" />
          </div>
        </div>
        {/* // * RIGHT SIDE */}
        <div className={`flex-col-start ${styles["value-right"]}`}>
          <SectionTitle
            alignCenter={false}
            subTitle="Our Value"
            title="Value we give to you"
            des={
              "We always ready to help by providijng the best services for you.\nWe beleive a good blace to live can make your life better"
            }
          />
          <Accordion
            className={`${styles.accordion}`}
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState("");
              return (
                <AccordionItem
                  className={`${styles["accordion-item"]} ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={`flex-center ${styles["accordion-button"]}`}
                    >
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className={`flex-center icon ${styles["icon"]}`}>
                        {item.icon}
                      </div>
                      <span className={`${styles["primary-text"]}`}>
                        {item.heading}
                      </span>
                      <div className={`flex-center icon`}>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className={`secondary-text ${styles["secondary-text"]}`}>
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
