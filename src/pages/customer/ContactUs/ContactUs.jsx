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
        </div>
      </div>
      <div className="spacer layer3"></div>
    </div>
  );
};

export default ContactUs;
