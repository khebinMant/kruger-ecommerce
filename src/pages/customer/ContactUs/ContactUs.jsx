import React from "react";
import "./ContactUs.scss";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="contact"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="contact_main floating">
        <div className="contact_container">
          <form>
            <label className="contact_label" aria-hidden="true">
              Contáctanos
            </label>

            <div className="contact_item_container">
              <div className="contact_item">
                <h3 className="contact_label_text">Nombre</h3>
                <input
                  className="contact_input"
                  type="text"
                  name="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="contact_item">
                <h3 className="contact_label_text">Email</h3>

                <input
                  className="contact_input"
                  type="email"
                  name="emial"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="contact_item contact_item_text ">
                <h3 className="contact_label_text">¿En qué te ayudamos?</h3>
                <input
                  className="contact_input contact_input_text"
                  type="text"
                  name="text"
                  placeholder="¿En qué te ayudamos?"
                  required
                />
              </div>
            </div>
            <button className="contact_btn">Enviar</button>
          </form>
          <i className="login-icon-carrot fa-solid fa-microphone"></i>
          <i className="login-icon-mug-hot fa-solid fa-mobile-screen"></i>
          <i className="login-icon-pizza-slice fa-solid fa-mobile-retro"></i>
          <i className="login-icon-pepper-hot fa-solid fa-comment-sms"></i>
          <i className="login-icon-ice-cream fa-solid fa-headphones"></i>
          <i className="login-icon-martini-glass-citrus fa-solid fa-signal"></i>
          <i className="login-icon-drumstick-bite fa-solid fa-square-phone"></i>
          <i className="login-icon-burger fa-solid fa-phone"></i>
          <i className="login-icon-shrimp fa-solid fa-sim-card"></i>
          <i className="login-icon-wheat-awn fa-solid fa-microchip"></i>
          <i className="login-icon-cookie-bite fa-solid fa-laptop-code"></i>
          <i className="login-icon-computer fa-solid fa-computer"></i>
          <i className="login-icon-phone2 fa-solid fa-mobile-button"></i>
        </div>
      </div>

      <div className="spacer layer3"></div>
    </motion.div>
  );
};

export default ContactUs;
