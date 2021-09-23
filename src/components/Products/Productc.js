import React from 'react';
import './Products.css'

const Productc = (props) => {
    // console.log(props.product)
    const {name, seller, price, img, stock} = props.product
    return (
        <div className='products'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p>By : {seller}</p>
                <p>Price : {price}</p>
                <p>only {stock} peices left - order soon</p>
                <button className='btn-add' onClick={()=> props.handleAddBtn(props.product)}> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Productc;