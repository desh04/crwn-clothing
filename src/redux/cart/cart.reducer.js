import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true, 
    cartItems: []
};

const cartReducer = ( state = INITIAL_STATE , action ) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM :
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)     //spreading previous value and adding payload
                //cartItems: state.cartItems.concat(action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state;       // if i am putting state in bracket {state} the case with the cart drop down is getting opposite.
    }
}

export default cartReducer;