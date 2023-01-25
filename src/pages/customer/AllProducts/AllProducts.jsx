import React, { useEffect, useState } from "react";
import Product from "../MainPage/Products/Product/Product";
import "./Allproducts.scss";
import { getAllProducts } from "../../../helpers/products/getAllProducts";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responseProducts = await Promise.resolve(getAllProducts());
    setProducts(responseProducts.filter(product=>product.type ==='PRODUCT'));
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <p>estoy cargando</p>
      ) : (
        <div className="show_products">
          <h2 className="show_products_title">All Products</h2>
          <div className="show_products_container">
            {products.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
