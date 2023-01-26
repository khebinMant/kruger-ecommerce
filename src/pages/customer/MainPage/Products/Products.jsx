import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.scss";
import { productsData } from "./dummy";
import { getAllProducts } from "../../../../helpers/products/getAllProducts"
const Products = () => {

  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responseProducts = await Promise.resolve(getAllProducts());
    setProducts(responseProducts.filter(product=>product.type ==='PRODUCT' && product.status === true));
    setIsLoading(false);
  };

  return (
    isLoading?
    <p>Estoy cargando</p>
    :
    <section className="products_container">
      <h2 className="products_container_title">Top Products</h2>
      <section className="products_main">
        {products.map((item) => (
          <Product item={item} />
        ))}
      </section>
    </section>
  );
};

export default Products;
