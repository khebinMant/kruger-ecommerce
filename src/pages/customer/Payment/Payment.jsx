import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Cart/CartItem/CartItem";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import "./Payment.scss";
import { startCreateOrder } from "../../../store/cart/thunks";

const Payment = () => {

  
  const {cart} = useSelector(state => state.cart)
  const {currentUser} = useSelector(state => state.users)
  const toast = useRef(null);
  const dispatch = useDispatch();

  const showWarn = () => {
    toast.current.show({severity:'warn', summary: 'Dirección de envío', detail:'No se ha especificado una dirección de envío', life: 3000});
  }

  const accept = async () => {
    //TODO ESO DEBE SER DINAMICO MEDIANTE UN DROPDOWN
    dispatch(startCreateOrder(currentUser.addresses[0]));
    toast.current.show({severity:'success', summary: 'Compra realizada', detail:'Tu compra se ha efectuado correctamente', life: 3000});
  
  }

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Cancelado', detail: 'Cancelaste la compra', life: 3000 });
  }

  const confirmOrder = () => {
    confirmDialog({
        message: 'Estas seguro de realizar estac compra con los datos proporcionados?',
        header: 'Confirma tu compra',
        icon: 'pi pi-exclamation-triangle',
        accept,
        reject
    });
  };

  const createOrder = ()=>{
    //TODO CREAR VALIDACIONES PARA EL FORMULARIO DE LA TARJETA
    //DROPDOWN DE DIRECCIONES DE ENVÍO DEL CLIENTE
    // if(shipmentAddress==''){
    //     showWarn()
    // }
    // else{
      confirmOrder() 
    // }
  }


  return (
    <section class="cart__checkout">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div class="cart__order">
        <h2>Verificar</h2>
        <h5>Order #0101</h5>
        <ul class="cart__order-list">
          {
            cart.items.map((item,index) =>(
                <CartItem  item={item} key={index} index={index}/>
            ))
          }
        </ul>
        <h5>Subtotal</h5>
        <h4>{cart.totalPrice} $</h4>
        <h5 class="cart__total">Total + IVA</h5>
        <h2 class="cart__total-value">{ Math.round((cart.totalPrice + cart.totalPrice *0.12)*100)/100} $</h2>
      </div>
      <div id="payment" class="cart__payment">
        <h2>Pagar</h2>
        <div class="cart__card">
          <div class="cart__card-content">
            <h5>Número de la tarjeta</h5>
            <h6 id="label-cardnumber">0000 0000 0000 0000</h6>
            <h5>
              Expiración<span>CVC</span>
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
              placeholder="Nombre de la tarjeta"
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
                placeholder="Telefono"
                pattern="\d*"
                title="Card Expiration Date"
              />
            </p>
            <p class="field">
              <input
                type="text"
                id="cardcvc"
                name="cardcvc"
                placeholder="Código ZIP"
                pattern="\d*"
                title="CVC Code"
              />
            </p>
          </div>
          <button class="cart__button-cta" title="Confirm your purchase">
            <span onClick={createOrder} >COMPRAR</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
