import React from "react";
import Product from "../MainPage/Products/Product/Product";
import "./Allproducts.scss";
import { productsData } from "../MainPage/Products/dummy";

const AllProducts = () => {
  return (
    <div className="show_products">
      <h2 className="show_products_title">All Products</h2>
      <div className="show_products_container">
        {productsData.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
