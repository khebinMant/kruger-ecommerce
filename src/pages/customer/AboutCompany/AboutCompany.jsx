import React from "react";
import "./AboutCompany.scss";

const AboutCompany = () => {
  return (
    <div className="company">
      <h2 className="heading">About Kruger Cell</h2>
      <p className="company_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia
        consequatur quam accusantium, repellat a quis tempore fugiat dolorum
        optio corporis autem eius, dolor earum officia corrupti amet magni
        ipsam.
      </p>
      <div className="company_objective">
        <div className="company_objective_info">
          <h3>
            Our <span>Company</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nihil
            laborum dicta. Iste ut laboriosam perspiciatis quasi officiis at
            tempore!
          </p>
        </div>
        <div className="company_objective_container">
          <img src="./images/company1.svg" alt="" />
        </div>
      </div>

      <div className="company_history">
        <div className="company_history_container">
          <img src="./images/company2.svg" alt="" />
        </div>
        <div className="company_history_info">
          <h3>
            <span>Our</span> History
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nihil
            laborum dicta. Iste ut laboriosam perspiciatis quasi officiis at
            tempore!
          </p>
        </div>
      </div>

      <div className="company_socials">
        <div className="company_socials_card">
          <i className="fa-brands fa-facebook"></i>
          <p>Facebook</p>
        </div>
        <div className="company_socials_card">
          <i className="fa-brands fa-instagram"></i>
          <p>Instagram</p>
        </div>
        <div className="company_socials_card">
          <i className="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
