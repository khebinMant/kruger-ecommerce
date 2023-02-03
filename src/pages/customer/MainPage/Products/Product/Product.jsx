import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Product.scss";
import serviceBack from "../../../../../assets/internety-mobil.svg";
import { useDispatch } from "react-redux";
import { startAddItemToCart } from "../../../../../store/cart/thunks";
import { useRef } from "react";
import { Toast } from "primereact/toast";
const Product = ({ item, i }) => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const onAddToCartclick = () => {
    let _product = {
      quantity: 1,
      price: item.price,
      productId: item.id,
    };
    dispatch(startAddItemToCart(_product));
    showSuccess();
  };
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Agregado",
      detail: "Teléfono agregado al carrito",
      life: 3000,
    });
  };

  return (
    <div>
      {" "}
      <Toast ref={toast} position="top-left" />
      <NavLink to={`/product/${item.id}`}>
        <motion.article
          className="card-home floating"
          initial={{ opacity: 0, translateX: -50, translateY: -50 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: i * 0.3 }}
        >
          <header className="card-home__header">
            {item.images ? (
              <img
                className="card-home__img"
                src={
                  item.images[0]
                    ? item.images[0].url || item.images[0].uri
                    : serviceBack
                }
                alt="ss"
              />
            ) : (
              <></>
            )}
          </header>
          <div className="card-home__body">
            <div className="circle"></div>
            <div className="circle"></div>
            <h3 className="card-home__title">{item.name}</h3>
            <section className="card-home__price">
              <h4 className="card-home__price-label">Precio</h4>
              <span className="card-home__price-value">{item.price}</span>
            </section>
            <NavLink
              to="#"
              onClick={onAddToCartclick}
              className="card-home__btn"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </div>
        </motion.article>
      </NavLink>
    </div>
  );
};

export default Product;
