import { useEffect, useState } from "react";
import "./Reviews.scss";
import { Rating } from 'primereact/rating';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { postReview } from "../../../../helpers/reviews/postReview";
import { useSelector } from "react-redux";
import { getReviews } from "../../../../helpers/reviews/getReviews";

const Reviews = ({product}) => {


  const [reviews, setReviews] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [reviewT, setReviewT] = useState('');
  const [rating, setRaiting] = useState(1);
  const { currentUser } = useSelector(state => state.users)
  const [canEdit, setCanEdit] = useState(false)

  const createReview = async () =>{
    if(reviewT==''){
        return
    }
    console.log(rating)

    let reviewObj = {
        raiting: rating,
        text: reviewT,
        productId: product.id,
        userId: currentUser.id
    }

    const response = await Promise.resolve(postReview(reviewObj));
    setRaiting(1)
    setReviewT('')
  }

  useEffect(() => {
    getSelectedProductReviews();
  }, [createReview]);

 
  const getSelectedProductReviews = async() =>{

    const reponseReviews = await Promise.resolve(getReviews());
    setReviews(reponseReviews.filter(review => review.productId === product.id))
    setIsLoading(false);
    currentUser?setCanEdit(false):setCanEdit(true)

  }

  return (
    isLoading?
    <p>Estoy cargando</p>
    :
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
        <div className="card">
        <span className="p-float-label" style={{marginTop:20}}>
          <InputTextarea disabled={canEdit} style={{width:'80vw'}} value={reviewT} onChange={(e) => setReviewT(e.target.value)} />
          <label htmlFor="reseña">Reseña</label>
        </span>
        <Rating disabled={canEdit} style={{marginTop:20}} value={rating} cancel={false} onChange={(e) => setRaiting(e.value)} />   
        <Button disabled={canEdit} onClick={createReview} style={{marginTop:50}} label="Enviar" icon="pi pi-check" />
        </div>
    </section>
  );
};

export default Reviews;
