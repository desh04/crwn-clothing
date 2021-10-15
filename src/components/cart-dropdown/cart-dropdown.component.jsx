import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.css';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} /> 
                )
                :
                <span className='empty-message'>Your cart is empty.</span>
            }
        </div>
        <CustomButton onClick={() => { 
            history.push('/checkout');
            dispatch(toggleCartHidden()); // use so if go to check out page from the dropDown cart items Go to CheckOut button, the dropDown toggle back to hidden
        }} >Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

/* // other way 
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
}) */

export default withRouter(connect(mapStateToProps)(CartDropdown));