import React, { useState } from "react";
import { BiGridAlt, BiX } from "react-icons/bi";

import "./Header.style.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <div className="header">
      <div className="header__container container">
        <a href="#" className="header__logo">
          Navbar
        </a>

        <div className={`header__menu ${menuOpen ? "showMenu" : ""}`}>
          <ul className="header__list">
            <li>
              <a href="#" className="header__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                Contact
              </a>
            </li>
          </ul>

          <a href="#" className="header__button button">
            Register
          </a>
        </div>

        <div className="header__toggle">
          {!menuOpen ? (
            <BiGridAlt onClick={menuToggleHandler} />
          ) : (
            <BiX onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
