import React from "react";
import Product from "./Product/Product";
import "./Products.scss";

const Products = () => {
  //   const handleClick = () => {
  //     navigate(`/product/${product.id}`);
  //   };

  return (
    <section className="products_main">
      <Product />
      <Product />
      <Product />
    </section>
  );
};

export default Products;
