import React from "react";
import cart from "../../assets/CartWidget.img/cart.svg";
import "./CartWidget.css";


function CartWidget() {
  return (
    <div className="CartWidget">
      
        <img className="cart" src={cart} alt="" width={30} /> 
      
    </div>
  );
}

export default CartWidget;
