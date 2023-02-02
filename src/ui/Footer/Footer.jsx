import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_details">
        <div className="footer_img">
          <img src="./images/logo.png" />
        </div>
        <div className="footer_text">
          Descubre el poder de la tecnología con nuestra amplia selección de
          dispositivos de última generación
        </div>
      </div>

      <div className="footer_container">
        <ul className="footer_container_list">
          <h3>Principal</h3>
          <NavLink to={"/"}>Inicio</NavLink>
          <NavLink to="/about">Sobre Nosotros</NavLink>
          <NavLink to={"/contact"}>Contáctanos</NavLink>
          <NavLink to="/faq">Preguntas</NavLink>
        </ul>
        <ul className="footer_container_list">
          <h3>Explora</h3>
          <NavLink to={"/products"}>Productos</NavLink>
          <NavLink to={"/search"}>Buscar</NavLink>
          <NavLink to={"/services"}>Servicios</NavLink>
          <NavLink to={"/cart"}>Carrito</NavLink>
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
