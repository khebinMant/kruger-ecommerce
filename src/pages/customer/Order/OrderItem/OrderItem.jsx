import React, { useEffect, useState } from "react";
import "./OrderItem.scss";
import defaultImg from "../../../../assets/default.png"
import { Divider } from 'primereact/divider';

const OrderItem = ({item}) => {
  

  return (
    <>

        <div className="cart-items">
          <div className="cart_about">
            <h6 className="cart_title">{item.product.name}<span style={{fontSize:'10px', color:'white'}}>({item.quantity})</span></h6>
            {
              location.pathname === "/cart" && 
              <div className="cart_about_img">
                <div className="cart_about_container">
                  {
                    item.images.map((image, index)=>(
                      <img key={index} src={image.url || image.uri} />
                    ))
                  }

                </div>
              </div>
            }
          </div>
          <div className="cart_prices">
            <div className="cart_amount"><p style={{color:'white'}}>Unidad</p> { Math.round((item.price)* 100)/100}$</div>
          </div>
            <div className="cart_amount"><p style={{color:'white'}}>Total</p>{ Math.round((item.price *  item.quantity)* 100)/100}$</div>
            {
              location.pathname === "/cart" &&             
              <div className="cart_extras">
                <div className="cart_remove">
                  <i onClick={deleteItem} className="fa-solid fa-trash"></i>
                </div>
              </div>
            }
        </div>
        <Divider />

    </>
  );
};

export default OrderItem;
