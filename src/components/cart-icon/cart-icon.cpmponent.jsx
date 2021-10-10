import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.css';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);
// my try to increase the number in the cart

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(function(acc, curr){
        acc = acc + curr.quantity;
        return acc;
    }, 0)
});

// del above in case of problem
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);