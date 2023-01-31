import React from "react";
import "./NoOrders.scss";

const NoOrders = () => {
  return (
    <div className="noorders">
      <h2 className="heading">¡Oops! No tienes ninguna orden</h2>

      <div className="noorders__img">
        <img src="./images/orders.svg" alt="" />
      </div>
    </div>
  );
};

export default NoOrders;
