import React, { useEffect, useState } from "react";
import Product from "../MainPage/Products/Product/Product";
import "./Allproducts.scss";
import { useGetProductsQuery } from "../../../store/services/apiCore";

const AllProducts = () => {
  const [products, setProducts] = useState();

  const { data, isFetching, error } = useGetProductsQuery();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responseProducts = await data;
    setProducts(
      responseProducts.filter((product) => product.type === "PRODUCT")
    );
  };

  if (isFetching) return "Loading";
  if (error) return "Error";

  return (
    <>
      {isLoading ? (
        <p>estoy cargando</p>
      ) : (
        <div className="show_products">
          <h2 className="show_products_title">All Products</h2>
          <div className="show_products_container">
            {products.map((item) => (
              <Product item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
