import { useState } from "react";
import "./Reviews.scss";
import { Rating } from 'primereact/rating';

const Reviews = ({reviews}) => {

  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h2>Reseñas</h2>
        <p>Que dicen nuestros clientes</p>
      </div>
      <div className="testimonial-box-container">
        {
          reviews.map(review => (
            <div key={review.id} className="testimonial-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img">
                    <img src={review.user.imageUrl?review.user.imageUrl:'https://w7.pngwing.com/pngs/686/219/png-transparent-youtube-user-computer-icons-information-youtube-hand-silhouette-avatar-thumbnail.png'} />
                  </div>
                  <div className="name-user">
                    <strong>{review.user.firstName} {review.user.lastName}</strong>
                    <span>{review.created}</span>
                  </div>
                </div>
                <div className="reviews">
                  <Rating value={review.raiting} cancel={false} />
                </div>
              </div>
              <div className="client-comment">
                <p>
                  {review.text}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Reviews;
