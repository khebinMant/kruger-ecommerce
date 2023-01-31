import React, { useEffect, useState } from "react";
import Product from "../../MainPage/Products/Product/Product";
import { productsData } from "../../MainPage/Products/dummy";
import "./RelatedProducts.scss";
import { getAllProductsByCategory } from "../../../../helpers/products/getAllProductsByCategory";
import Loading from "../../../../components/Loading";

const RelatedProducts = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRelatedProducts();
  }, []);

  const getRelatedProducts = async () => {
    const responseRelatedProd = await Promise.resolve(
      getAllProductsByCategory(product.category.id)
    );
    setRelatedProducts(responseRelatedProd);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="relatedproducts">
          <h2>Related Products</h2>
          <div className="relatedproducts_main">
            {relatedProducts.map((item, index, i) => (
              <Product key={index} item={item} i={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default RelatedProducts;
