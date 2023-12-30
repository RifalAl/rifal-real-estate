import React, { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import data from "../../utils/linkMenu.json";
import styles from "./Header.module.css";

const Header = () => {
  const [toggleShowMenu, setToggleShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const NAV_LINK = data;

  const scrollHandler = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 60) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);

  const toggleMenuShowHandler = () => {
    setToggleShowMenu((prevValue) => !prevValue);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !menuOpen && "-100%" };
    }
  };

  const linkClickedHandler = (link) => {
    // window.location.replace(link);
    const offsetValue = 0;
    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(link).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offsetValue,
    });
    setToggleShowMenu(false);
  };

  return (
    <header
      className={`${styles["header-wrapper"]}  ${
        isScroll ? "sticky-header-active" : null
      }`}
    >
      <div
        className={`flex-center paddings inner-width ${styles["header-container"]} `}
      >
        <img src="./logo.png" alt="website logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setToggleShowMenu(false)}>
          <nav
            style={getMenuStyles(toggleShowMenu)}
            className={`flex-center ${styles["header-menu"]} `}
          >
            {NAV_LINK.map((nav, i) => (
              <span
                onClick={() => linkClickedHandler(nav.link)}
                className={`${styles.links}`}
                key={i}
              >
                {nav.title}
              </span>
            ))}
            {/* <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a> */}

            <a className={`button`} href="mailto:aldi4rifaldi@gmail.com">
              Contact Us
            </a>
          </nav>
        </OutsideClickHandler>

        <div
          onClick={toggleMenuShowHandler}
          className={`${styles["menu-icon"]}`}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
