import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../../helpers/products/getProduct";
import {
  startDeleteItemFromCart,
  startUpdateQuantityItemToCart,
} from "../../../../store/cart/thunks";
import { useLocation } from "react-router-dom";
import "./CartItem.scss";
import defaultImg from "../../../../assets/default.png";

const CartItem = ({item}) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [newQuantity, setNewQuantity] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    getProductItem();
  }, []);

  useEffect(() => {
    updateQuantity();
  }, [newQuantity]);

  const getProductItem = async () => {
    const response = await Promise.resolve(getProduct(item.productId));
    setNewQuantity(item.quantity);
    setProduct(response);
    setIsLoading(false);
  };

  const increase = () => {
    setNewQuantity((count) => count + 1);
  };

  const decrease = () => {
    if (newQuantity === 1) {
      setNewQuantity(1);
    } else {
      setNewQuantity((count) => count - 1);
    }
  };

  const updateQuantity = () => {
    let _item = {
      quantity: newQuantity,
      price: item.price,
      productId: item.productId,
    };
    dispatch(startUpdateQuantityItemToCart(_item));
  };

  const deleteItem = () => {
    dispatch(startDeleteItemFromCart(item));
  };

  return (
    <>
      {isLoading ? (
        <p>Estoy cargando</p>
      ) : (
        <div className="cart-items">
          <div className="cart_image-box">
            <img
              src={
                product.images[0]
                  ? product.images[0].url || product.images[0].uri
                  : defaultImg
              }
              style={{ height: "80px" }}
            />
          </div>
          <div className="cart_about">
            <h2 className="cart_title">{product.name}</h2>
            <h3 className="cart_subtitle">{product.brand}</h3>
            {location.pathname === "/cart" && (
              <div className="cart_about_img">
                <div className="cart_about_container">
                  {product.images.map((image, index) => (
                    <img key={index} src={image.url || image.uri} />
                  ))}
                </div>
              </div>
            )}
          </div>
          {location.pathname === "/cart" && (
            <div className="cart_counter">
              <div className="cart_btn" onClick={decrease}>
                -
              </div>
              <div className="cart_count">{newQuantity}</div>
              <div className="cart_btn" onClick={increase}>
                +
              </div>
            </div>
          )}
          <div className="cart_prices">
            <div className="cart_amount">{item.price} $</div>
            {location.pathname === "/payment" && <span>({item.quantity})</span>}
          </div>
          <div className="cart_prices">
            <div className="cart_amount">
              {Math.round(item.price * item.quantity * 100) / 100}$
            </div>
          </div>
          {location.pathname === "/cart" && (
            <div className="cart_extras">
              <div className="cart_remove">
                <i onClick={deleteItem} className="fa-solid fa-trash"></i>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartItem;
