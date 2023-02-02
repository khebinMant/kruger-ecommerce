import { Fieldset } from "primereact/fieldset";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { getCartsByUserId } from "../../../helpers/carts/getCartsByUserId";
import "./Order.scss";
import OrderItem from "./OrderItem/OrderItem";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { updateCart } from "../../../helpers/carts/updateCart";
import NoOrders from "./NoOrders/NoOrders";
import { getCartReportById } from "../../../helpers/carts/getCartReportById";
import { postCoupon } from "../../../helpers/coupons/postCoupon";

export const Order = () => {
  const [carts, setCarts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.users);

  useEffect(() => {
    getCarts();
  }, []);

  const getCarts = async () => {
    setIsLoading(true);
    if (currentUser) {
      const responseCarts = await Promise.resolve(
        getCartsByUserId(currentUser.id)
      );
      setCarts(responseCarts);
      setIsLoading(false);
    } else {
      const isLogged = JSON.parse(localStorage.getItem("currentUser"));
      const responseCarts = await Promise.resolve(
        getCartsByUserId(isLogged.id)
      );
      setCarts(responseCarts);
      setIsLoading(false);
    }
  };

  const getOrderStatus = (status) => {
    if (status == "PAID") {
      return "PAGADO";
    }
    if (status == "ACCEPTED") {
      return "ACEPTADO";
    }
    if (status == "IN_TRAVEL") {
      return "EN VIAJE";
    }
    if (status == "RECEIVED") {
      return "RECIBIDO";
    }
    if (status == "CANCELED") {
      return "CANCELADO";
    }
  };

  const onCancelOrder = async (cart) => {
    let _cart = {
      id: cart.id,
      orderId: cart.order.id,
      userId: cart.user.id,
      status: "CANCELED",
    };
    const responseUpdatedCartStatus = await Promise.resolve(updateCart(_cart));
    getCarts();
  };

  const onReceivedOrder = async (cart) => {
    let _cart = {
      id: cart.id,
      orderId: cart.order.id,
      userId: cart.user.id,
      status: "RECEIVED",
    };
    
    const responseUpdatedCartStatus = await Promise.resolve(updateCart(_cart));
    let _coupon = {
      type:'PERCENTAGE',
      quantity:15,
      status:"RESERVED",
      userId:currentUser.id
    }
    const responsePostCoupon = await Promise.resolve(postCoupon(_coupon));

    getCarts();
  };

  const onPrintOrderInvoice = async (cart) => {
    const responseReportCart = await Promise.resolve(getCartReportById(cart))

    window.open(`http://localhost:8082/api/carts/${cart.id}/report`, '_blank', 'noreferrer')  

  };

  return carts ? (
    isLoading ? (
      <Loading />
    ) : (
      <div className="cart">
        <div className="cart_container">
          <div className="cart_header">
            <h3 className="cart_heading">Historial de compras</h3>
          </div>

          <div className="cart_items_container">
            {carts.map((cart, index) => (
              <Fieldset
                key={index}
                collapsed
                legend={`${cart.user.firstName} ${
                  cart.user.lastName
                }, Estado: ${getOrderStatus(cart.status)}`}
                toggleable
              >
                {cart.order.items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
                <div className="cart_checkout">
                  <div className="cart_total">
                    <div className="cart_subtotal">Sub-Total</div>
                    <div className="cart_items">
                      {Math.round(cart.order.subTotal * 100) / 100}$
                    </div>
                    {cart.order.coupon ? (
                      <>
                        <div className="cart_subtotal">Descuento por cupón</div>
                        <div className="cart_items">
                          {-Math.round(cart.order.coupon.quantity * 100) / 100}
                          {cart.order.coupon.type === "PERCENTAGE" ? `%` : `$`}
                        </div>
                        <div className="cart_items">
                          {cart.order.coupon.type === "PERCENTAGE" ? (
                            <del>
                              {Math.round(
                                cart.order.subTotal *
                                  cart.order.coupon.quantity *
                                  0.01 *
                                  100
                              ) / 100}
                              $
                            </del>
                          ) : (
                            <del>
                              {Math.round(
                                (cart.order.subTotal -
                                  cart.order.coupon.quantity) *
                                  100
                              ) / 100}
                              $
                            </del>
                          )}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="cart_subtotal">Total + IVA(12%)</div>
                    <div className="cart_items">
                      {Math.round(cart.order.totalPrice * 100) / 100}$
                    </div>
                  </div>
                  <div className="cart__actions">
                    {cart.status === "PAID" ? (
                      <Button
                        onClick={() => onCancelOrder(cart)}
                        label="Cancelar Orden"
                        className="p-button-danger"
                      />
                    ) : cart.status === "IN_TRAVEL" ? (
                      <Button
                        onClick={() => onReceivedOrder(cart)}
                        style={{ backgroundColor: "#A1FF60" }}
                        label="Marcar como recibida"
                        className="p-button-success"
                      />
                    ) : cart.status === "CANCELED" ? (
                      <p>Esta orden fue cancelada</p>
                    ) : cart.status === "RECEIVED" ? (
                      <Button
                        onClick={() => onPrintOrderInvoice(cart)}
                        label="Descargar recibo"
                        className="p-button-secondary"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Fieldset>
            ))}
          </div>
        </div>
      </div>
    )
  ) : (
    <NoOrders />
  );
};
