import React from "react";
import Product from "../../MainPage/Products/Product/Product";
import { productsData } from "../../MainPage/Products/dummy";
import "./RelatedProducts.scss";

const RelatedProducts = () => {
  return (
    <section className="relatedproducts">
      <h2>Related Products</h2>
      <div className="relatedproducts_main">
        {productsData.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
