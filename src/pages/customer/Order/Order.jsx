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
    getCarts();
  };

  const onPrintOrderInvoice = async (cart) => {
    //TOODO
    //AQUI LLAMO AL ENDPOINT EN EL SERVIDOR
    //QUE VA A GENERAR EL REPORTE JASPERSOFT
  };

  return carts ? (
    isLoading ? (
      <Loading />
    ) : (
      <div className="cart">
        <div class="cart_container">
          <div class="cart_header">
            <h3 class="cart_heading">Historial de compras</h3>
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
                <div class="cart_checkout">
                  <div class="cart_total">
                    <div class="cart_subtotal">Sub-Total</div>
                    <div class="cart_items">
                      {Math.round(cart.order.subTotal * 100) / 100}$
                    </div>
                    {cart.order.coupon ? (
                      <>
                        <div class="cart_subtotal">Descuento por cupón</div>
                        <div class="cart_items">
                          {-Math.round(cart.order.coupon.quantity * 100) / 100}
                          {cart.order.coupon.type === "PERCENTAGE" ? `%` : `$`}
                        </div>
                        <div class="cart_items">
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
                    <div class="cart_subtotal">Total + IVA(12%)</div>
                    <div class="cart_items">
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
                        label="Imprimir recibo"
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
