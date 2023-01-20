import React from "react";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
        <ul className="footer_container_list">
          <h3>Products</h3>
          <li>All products</li>
          <li>Cart</li>
          <li>All products</li>
          <li>Cart</li>
        </ul>
        <ul className="footer_container_list">
          <h3>Social</h3>
          <li>All products</li>
          <li>Cart</li>
          <li>All products</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
