import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.css';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);
// The code below is also called selector
// selector - some code that gets a state, and pulls of a small portion 
// or a slice of that state. 

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

// del above in case of problem
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);