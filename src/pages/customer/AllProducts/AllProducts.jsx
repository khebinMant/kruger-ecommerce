import React, { useEffect, useState } from "react";
import Product from "../MainPage/Products/Product/Product";
import "./Allproducts.scss";
import { getAllProducts } from "../../../helpers/products/getAllProducts";
import Loading from "../../../components/Loading";
import { motion } from "framer-motion";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responseProducts = await Promise.resolve(getAllProducts());
    setProducts(
      responseProducts.filter((product) => product.type === "PRODUCT")
    );
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <motion.div
          className="show_products"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
          <h2 className="heading show_products_title">Todos los Productos</h2>
          <div className="show_products_container">
            {products.map((item, i) => (
              <Product key={item.id} item={item} i={i} />
            ))}
          </div>
          <div className="spacer layer10"></div>
        </motion.div>
      )}
    </>
  );
};

export default AllProducts;
