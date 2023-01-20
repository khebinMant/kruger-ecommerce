import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./CustomerNavBar.scss";

const CustomerNavBar = () => {
  const navbar = useRef();

  const handleHamClick = () => {
    navbar.current.classList.toggle("header__nav--close");
  };

  return (
    <header className="header">
      <NavLink className="header__logo-navlink" to="/">
        <h1 className="header__logo">Kruger</h1>
      </NavLink>
      <i
        onClick={handleHamClick}
        className="fa-solid fa-bars header__menu-ham"
      ></i>
      <nav ref={navbar} className="header__nav header__nav--close">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navlink active-link" : "header__navlink"
              }
              to="/search"
            >
              <p>Products</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navlink active-link" : "header__navlink"
              }
              to="/login"
            >
              <p>Login</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navlink active-link" : "header__navlink"
              }
              to="/about"
            >
              <p>About us</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navlink active-link" : "header__navlink"
              }
              to="/cart"
            >
              <p>Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomerNavBar;
