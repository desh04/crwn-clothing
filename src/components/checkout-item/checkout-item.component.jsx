import React from "react";

import './checkout-item.styles.css';

const CheckoutItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='checkout-item'>
        <div className='image-container'> {/* using container div cause that makes easy to set the size of the image, can use margin, padding to control the size */}
            <img src={imageUrl} alt='item' />
        </div>    
        <span className='name'>{ name }</span>
        <span className='quantity'>{ quantity }</span>
        <span className='price'>Rs. { price }</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;