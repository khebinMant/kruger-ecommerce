import React from "react";
import DetailsThumb from "../components/DetailsThumb";
import "./ProductInfo.scss";

class ProductInfo extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max",
          "https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/0x0.jpg?format=jpg&crop=2276,1279,x145,y97,safe&width=1200",
          "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg",
          "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/iphone-14-model-sixteen_nine.jpg",
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["yellow", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="productinfo">
        {products.map((item) => (
          <>
            <div className="productinfo_details">
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>
          </>
        ))}
        <div className="productDetail_info">
          <h2 className="productDetail_info_title">Iphone 1</h2>
          <p className="productDetail_info_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum
            laboriosam vitae necessitatibus quas asperiores ratione quibusdam et
          </p>
          <div className="productDetail_info_stats">
            <div className="productDetail_info_stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="productDetail_info_price">200$</div>
          </div>

          <ul className="productDetail_info_extras">
            <li className="productDetail_info_extras_item">
              <i class="fa-solid fa-mobile"></i>
              <p>Ram</p>
              <p>6GB</p>
            </li>
            <li className="productDetail_info_extras_item">
              <i class="fa-solid fa-mobile"></i>
              <p>Ram</p>
              <p>6GB</p>
            </li>
            <li className="productDetail_info_extras_item">
              <i class="fa-solid fa-mobile"></i>
              <p>Ram</p>
              <p>6GB</p>
            </li>
          </ul>

          <div className="productDetail_info_quantity">
            <i class="fa-solid fa-minus"></i>
            <div className="productDetail_info_quantity_counter">1</div>
            <i class="fa-solid fa-plus"></i>
          </div>

          <div className="productDetail_info_btns">
            <button className="productDetail_info_btns_btn1">
              Add to cart
            </button>
            <button className="productDetail_info_btns_btn2">Buy now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
