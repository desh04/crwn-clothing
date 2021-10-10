import { createSelector } from 'reselect';

// input type selector(doesn't use createSelector) that select only the cart
const selectCart = state => state.cart;

// output type selector(does use createSelector) 
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => 
        cartItems.reduce(function(acc, curr){
            acc = acc + curr.quantity;
            return acc;
            }, 0
        )
)