import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import "./BannerSearch.scss";

const BannerSearch = () => {
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
              src="https://imagekit.androidphoria.com/wp-content/uploads/Fondo-negro-para-movil.jpg"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>Compra</p>
            <h2>AHORA</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>
        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://images.unsplash.com/photo-1624204731525-995bd565b9c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>Envio</p>
            <h2>GRATIS</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

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
          <div className="text-box">
            <p>Tu nuevo</p>
            <h2>CELU</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>

        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://firstsportz.com/wp-content/uploads/2020/11/IMG-20201120-WA0013-1024x576.jpg"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>Las mejores</p>
            <h2>MARCAS</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>

        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://www.movilzona.es/app/uploads-movilzona.es/2019/08/iPhone-XR-sobre-fondo-negro.jpg"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>Renuevate</p>
            <h2>AQUI</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>

        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://sfractus-images.cleo.media/unsafe/0x0:2048x1152/980x0/images/Huawei-P50-Pro-6084.jpg"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>10%</p>
            <h2 className="slider_item_title">MENOS</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>

        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://images.unsplash.com/photo-1549546851-c3550b32e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>Los Mejores</p>
            <h2>PRECIOS</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>

        <div className="slider_item">
          <div className="slider_img_container">
            <img
              className="slider_img"
              src="https://imagekit.androidphoria.com/wp-content/uploads/Fondo-negro-ahorra-bateria-en-movil.jpg"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>Compra</p>
            <h2>ONLINE</h2>
            <h3>Kruger Cell</h3>

            <div className="row">
              <NavLink to={"/products"}>Productos</NavLink>
              <NavLink to={"/services"}>Servicios</NavLink>
              <span>Explora lo que tenemos para ofrecerte</span>
            </div>
          </div>

          <div class="circle-banner"></div>
          <div class="circle-banner2"></div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSearch;
