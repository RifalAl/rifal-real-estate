import React, { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Header.module.css";

const Header = () => {
  const [toggleShowMenu, setToggleShowMenu] = useState(false);
  const toggleMenuShowHandler = () => {
    setToggleShowMenu((prevValue) => !prevValue);
  };
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <header className={`${styles["header-wrapper"]}`}>
      <div
        className={`flex-center paddings inner-width ${styles["header-container"]} `}
      >
        <img src="./logo.png" alt="website logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setToggleShowMenu(false)}>
          <nav
            style={getMenuStyles(toggleShowMenu)}
            className={`flex-center ${styles["header-menu"]} `}
          >
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className={`button`}>
              <a href="">Contact Us</a>
            </button>
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
