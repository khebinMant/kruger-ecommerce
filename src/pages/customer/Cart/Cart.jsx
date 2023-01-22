import React from "react";
import { NavLink } from "react-router-dom";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div class="cart_container">
        <div class="cart_header">
          <h3 class="cart_heading">Shopping Cart</h3>
          <h5 class="cart_action">Remove all</h5>
        </div>

        <div className="cart_items_container">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <hr />
        <div class="cart_checkout">
          <div class="cart_total">
            <div>
              <div class="cart_subtotal">Sub-Total</div>
              <div class="cart_items">2 items</div>
            </div>
            <div class="cart_total-amount">$6.18</div>
          </div>
          <NavLink to="/payment">
            <button class="cart_button">Checkout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
