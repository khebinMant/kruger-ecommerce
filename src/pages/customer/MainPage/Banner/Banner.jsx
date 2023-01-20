import Slider from "react-slick";

import "./Banner.scss";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://www.freepnglogos.com/uploads/mobile-png/export-genius-country-wise-analysis-mobile-phones-38.png"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
