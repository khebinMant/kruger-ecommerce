import React from "react";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div class="cart-items">
      <div class="cart_image-box">
        <img
          src="https://www.vodafone.com.au/images/devices/apple/iphone-14-pro-max/iphone-14-pro-max-deep-purple-feature1-m.jpg"
          style={{ height: "80px" }}
        />
      </div>
      <div class="cart_about">
        <h2 class="cart_title">Iphone 11</h2>
        <h3 class="cart_subtitle">Apple</h3>
        <div className="cart_about_img">
          <img src="https://www.vodafone.com.au/images/devices/apple/iphone-14-pro-max/iphone-14-pro-max-deep-purple-feature1-m.jpg" />
        </div>
      </div>
      <div class="cart_counter">
        <div class="cart_btn">-</div>
        <div class="cart_count">2</div>
        <div class="cart_btn">+</div>
      </div>
      <div class="cart_prices">
        <div class="cart_amount">$2.99</div>

        <div className="cart_extras">
          <div class="cart_save">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="cart_remove">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
