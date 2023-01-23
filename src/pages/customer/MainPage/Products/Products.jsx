import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
import { productsData } from "./dummy";
const Products = () => {
  //   const handleClick = () => {
  //     navigate(`/product/${product.id}`);
  //   };

  return (
    <section className="products_container">
      <h2 className="products_container_title">Top Products</h2>
      <section className="products_main">
        {productsData.map((item) => (
          <Product item={item} />
        ))}
      </section>
    </section>
  );
};

export default Products;
