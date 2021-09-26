import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {img, name} = props.contributor;

    return (
        // right side cart
        <div className="cart">
            <div className="cart-img">
                <img src={img} alt={name} />
            </div>
            <div className="cart-title">
                <h4>{name} <i className="fas fa-check-circle"></i></h4>
            </div>
        </div>
    );
};

export default Cart;