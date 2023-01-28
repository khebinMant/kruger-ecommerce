import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact_main">
        <div className="contact_container">
          <form>
            <label className="contact_label" aria-hidden="true">
              Contact us
            </label>

            <div className="contact_item_container">
              <div className="contact_item">
                <h3 className="contact_label_text">Name</h3>
                <input
                  className="contact_input"
                  type="text"
                  name="text"
                  placeholder="Name"
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
                <h3 className="contact_label_text">What do you need us for?</h3>
                <input
                  className="contact_input contact_input_text"
                  type="text"
                  name="text"
                  placeholder="What do you need us for?"
                  required
                />
              </div>
            </div>
            <button className="contact_btn">Send</button>
          </form>
          <i class="login-icon-carrot fa-solid fa-microphone"></i>
          <i class="login-icon-mug-hot fa-solid fa-mobile-screen"></i>
          <i class="login-icon-pizza-slice fa-solid fa-mobile-retro"></i>
          <i class="login-icon-pepper-hot fa-solid fa-comment-sms"></i>
          <i class="login-icon-ice-cream fa-solid fa-headphones"></i>
          <i class="login-icon-martini-glass-citrus fa-solid fa-signal"></i>
          <i class="login-icon-drumstick-bite fa-solid fa-square-phone"></i>
          <i class="login-icon-burger fa-solid fa-phone"></i>
          <i class="login-icon-shrimp fa-solid fa-sim-card"></i>
          <i class="login-icon-wheat-awn fa-solid fa-microchip"></i>
          <i class="login-icon-cookie-bite fa-solid fa-laptop-code"></i>
          <i class="login-icon-computer fa-solid fa-computer"></i>
          <i class="login-icon-phone2 fa-solid fa-mobile-button"></i>
        </div>
      </div>

      <div className="spacer layer3"></div>
    </div>
  );
};

export default ContactUs;
