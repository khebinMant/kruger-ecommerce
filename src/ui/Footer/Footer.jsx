import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_details">
        <div className="footer_img">
          <h2>Kruger</h2>
        </div>
        <div className="footer_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          vero natus ut nulla, fugiat pariatur!
        </div>
      </div>

      <div className="footer_container">
        <ul className="footer_container_list">
          <h3>Main</h3>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to={"/contact"}>Contact us</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </ul>
        <ul className="footer_container_list">
          <h3>Products</h3>
          <NavLink to={"/search"}>All products</NavLink>
          <NavLink to={"/search"}>Explore</NavLink>
          <NavLink to={"/search"}>All services</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
        </ul>
        <ul className="footer_container_list">
          <h3>Social</h3>
          <div className="footer_container_list_social">
            <NavLink>
              <i class="fa-brands fa-twitter"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-facebook"></i>
            </NavLink>
            <NavLink>
              <i class="fa-brands fa-linkedin"></i>
            </NavLink>
            <NavLink>
              <i class="fa-solid fa-envelope"></i>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
