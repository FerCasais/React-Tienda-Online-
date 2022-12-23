import React from "react";
import cart from '../../assets/CartWidget.img/cart.svg';
import './CartWidget.css';


function CartWidget() {
    return (
        <div className="CartWidget">
        
        <a href="#"><img className="cart"  src={cart} alt="" width={30}/></a>
        
        </div>
       
    );
    }

    export default CartWidget;