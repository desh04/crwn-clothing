export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id 
    );

    if(existingCartItem) {
        return cartItems.map(cartItem =>        // using map cause we want to return new array every time so that react will render things
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem
            )  
    }

    // Adding new cartItemToAdd when it was not existing before
    // {...cartItemToAdd, quantity:1} this code adds a new key in the object named quantity with the initial value of 1.
    return [...cartItems, {...cartItemToAdd, quantity:1}];
}