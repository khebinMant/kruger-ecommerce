import React from "react";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h2>Testimonials</h2>
        <p>What our clients say</p>
      </div>
      <div className="testimonial-box-container">
        <div className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="https://ruizhealytimes.com/wp-content/uploads/2014/10/steve-jobs-1200x730.jpg" />
              </div>
              <div className="name-user">
                <strong>Jose Andres</strong>
                <span>20/01/2023</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quaerat quis? Provident temporibus architecto
            </p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="https://ruizhealytimes.com/wp-content/uploads/2014/10/steve-jobs-1200x730.jpg" />
              </div>
              <div className="name-user">
                <strong>Jose Andres</strong>
                <span>20/01/2023</span>
              </div>
            </div>
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="client-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quaerat quis? Provident temporibus architecto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
