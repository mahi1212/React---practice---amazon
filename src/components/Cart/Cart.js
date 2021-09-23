import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const {cart} = props
    let total = 0;
    for(const product of cart){
        total = total + product.price
    }

    let shippng  = 0
    for(const product of cart){
        shippng = shippng + product.shipping
    }

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Items ordered : {props.cart.length}</p>
            <br />
            <p>Price : {total.toFixed(2)}</p>
            <p>Delivery : {shippng.toFixed(2)}</p>
            <hr />
            Total : {total + shippng}
        </div>
    );
};

export default Cart;