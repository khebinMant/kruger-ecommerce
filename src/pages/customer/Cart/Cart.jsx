import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Toast } from "primereact/toast";
import { resetCart } from "../../../store/cart/cartSlice";


const Cart = () => {

  const {cart} = useSelector(state => state.cart)
  const toast = useRef(null);
  const dispatch = useDispatch();

  const refreshCart = () =>{
    dispatch(resetCart())
    localStorage.removeItem("cart");
  }


  return (
    <div className="cart">
      <Toast ref={toast} />
      <div class="cart_container">
        <div class="cart_header">
          <h3 class="cart_heading">Carrito de compras</h3>
          <h5 onClick={refreshCart} class="cart_action">Eliminar todos</h5>
        </div>

        <div className="cart_items_container">
          {
            cart.items.map((item,index) =>(
                <CartItem  item={item} key={item.id} index={index}/>
            ))
          }
        </div>

        <hr />
        
        
        <div class="cart_checkout">
          <div class="cart_total">
            <div>
              <div class="cart_subtotal">Sub-Total</div>
              <div class="cart_items">{ cart.items.length} items</div>
            </div>
            <div class="cart_total-amount">{ Math.round(cart.totalPrice * 100)/100} $</div>
          </div>
          <NavLink to="/payment">
            <button class="cart_button">Continuar</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
