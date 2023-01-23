import React from "react";
import "./ProductDetail.scss";
import ProductInfo from "./ProductInfo/ProductInfo";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Reviews from "./Reviews/Reviews";

const ProductDetail = () => {
  return (
    <section className="productDetail">
      <div className="productDetail_main">
        <ProductInfo />

        <div className="productDetail_video">
          <iframe
            width="90%"
            height="400px"
            src="https://www.youtube.com/embed/TBTgQbjRsqg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <Reviews />

        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductDetail;
