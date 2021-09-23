import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Productc from '../Products/Productc';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleAddBtn = products =>{
        const newCart = [...cart, products]
        setCart(newCart)
    }

    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data=> setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="product-part">
                {
                    products.map(product=> <Productc 
                        product={product}
                        handleAddBtn={handleAddBtn}
                        key ={product.key}></Productc>)
                }
            </div>
            <div className="cart-part">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;