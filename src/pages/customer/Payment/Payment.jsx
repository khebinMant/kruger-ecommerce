import React from "react";
import CartItem from "../Cart/CartItem/CartItem";
import "./Payment.scss";

const Payment = () => {
  return (
    <section class="cart__checkout">
      <div class="cart__order">
        <h2>Checkout</h2>
        <h5>Order #0101</h5>
        <ul class="cart__order-list">
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
        <h5>Shipping</h5>
        <h4>$ 9.50</h4>
        <h5 class="cart__total">Total</h5>
        <h2 class="cart__total-value">$ 167.50</h2>
      </div>
      <div id="payment" class="cart__payment">
        <h2>Payment</h2>
        <div class="cart__card">
          <div class="cart__card-content">
            <h5>Card Number</h5>
            <h6 id="label-cardnumber">0000 0000 0000 0000</h6>
            <h5>
              Expiration<span>CVC</span>
            </h5>
            <h6 id="label-cardexpiration">
              00 / 0000<span>000</span>
            </h6>
          </div>
          <div class="cart__wave"></div>
        </div>
        <div class="cart__card-form">
          <p class="cart__field">
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="1234 5678 9123 4567"
              pattern="\d*"
              title="Card Number"
            />
          </p>

          <div className="cart__card-form__bottom">
            <p class="cart__field cart__space">
              <input
                type="text"
                id="cardexpiration"
                name="cardexpiration"
                placeholder="03 / 08"
                pattern="\d*"
                title="Card Expiration Date"
              />
            </p>
            <p class="field">
              <input
                type="text"
                id="cardcvc"
                name="cardcvc"
                placeholder="123"
                pattern="\d*"
                title="CVC Code"
              />
            </p>
          </div>
          <p class="cart__field">
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="Full Name"
              title="Card Number"
            />
          </p>
          <p class="cart__field">
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="Email"
              pattern="\d*"
              title="Card Number"
            />
          </p>

          <p class="cart__field">
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="Addressing"
              pattern="\d*"
              title="Card Number"
            />
          </p>
          <div className="cart__card-form__bottom">
            <p class="cart__field cart__space">
              <input
                type="text"
                id="cardexpiration"
                name="cardexpiration"
                placeholder="Phone"
                pattern="\d*"
                title="Card Expiration Date"
              />
            </p>
            <p class="field">
              <input
                type="text"
                id="cardcvc"
                name="cardcvc"
                placeholder="ZIP Code"
                pattern="\d*"
                title="CVC Code"
              />
            </p>
          </div>
          <button class="cart__button-cta" title="Confirm your purchase">
            <span>PURCHASE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
