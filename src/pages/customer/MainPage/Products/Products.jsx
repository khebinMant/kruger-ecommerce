import React from "react";
import Product from "./Product/Product";
import "./Products.scss";

const Products = () => {
  //   const handleClick = () => {
  //     navigate(`/product/${product.id}`);
  //   };

  return (
    <section className="products_container">
      <h2 className="products_container_title">Top Products</h2>
      <section className="products_main">
        <Product />
        <Product />
        <Product />
      </section>
    </section>
  );
};

export default Products;
