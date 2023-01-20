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
    <div className="slider_container">
      <Slider {...settings}>
        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://firstsportz.com/wp-content/uploads/2020/11/IMG-20201120-WA0013-1024x576.jpg"
              alt=""
            />
          </div>
          <p className="slider_text_l">
            Lo que puedas
            <span> necesitar</span>
          </p>
          <button className="slider_btn">More Info</button>
          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>
        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://images.hindustantimes.com/tech/img/2021/03/17/960x540/gsmarena_000_1615983838874_1615983847615.jpg"
              alt=""
            />
          </div>
          <p className="slider_text_l">
            Las mejores
            <span> marcas</span>{" "}
          </p>
          <button className="slider_btn">More Info</button>
          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>
        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://img.uswitch.com/qhi9fkhtpbo3/2I5HUWlH6ni5gFaTZGtPKu/66448238943ce07fae036c104066b076/refurbished_iphones_image.jpg?w=770&auto=webp&quality=55,45"
              alt=""
            />
          </div>
          <p className="slider_text_l">
            Tu nuevo
            <span> celular</span>
          </p>
          <button className="slider_btn">More Info</button>
          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>
        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://cdn.pixabay.com/photo/2017/07/31/22/44/mobile-2561746__340.jpg"
              alt=""
            />
          </div>
          <p className="slider_text_l">
            Todo en un solo
            <span> lugar</span>
          </p>
          <button className="slider_btn">More Info</button>
          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
