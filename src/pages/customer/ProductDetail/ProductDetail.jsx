import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import Loading from "../../../components/Loading";
import { getProduct } from "../../../helpers/products/getProduct";
import { getReviews } from "../../../helpers/reviews/getReviews";
import { setSelectedProduct } from "../../../store/cart/cartSlice";
import "./ProductDetail.scss";
import { ProductInfo } from "./ProductInfo/ProductInfo";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Reviews from "./Reviews/Reviews";

const ProductDetail = () => {

  const dispatch = useDispatch();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getSelectedProduct();
  }, []);


  const getSelectedProduct = async() =>{
    const responseProduct = await Promise.resolve(getProduct(params.id));
    setProduct(responseProduct)
    dispatch(setSelectedProduct(responseProduct))
    setIsLoading(false);
  }
  return (
    <>
      {
        isLoading? 
        <Loading/>
        :
        <section className="productDetail">
          <div className="productDetail_main">
            <ProductInfo item={product}/>

            <div className="productDetail_video">
              <iframe
                width="90%"
                height="400px"
                src={product.youtubeLink.startsWith("http")?product.youtubeLink:'https://www.youtube.com/embed/BvdrrLtUWs8'}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <Reviews product={product}/>

            <RelatedProducts product={product}/>
          </div>
        </section>
      }
    </>
  );
};

export default ProductDetail;
