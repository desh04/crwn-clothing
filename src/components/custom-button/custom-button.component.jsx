import React from 'react';

import './custom-button.style.css';
// will be conditionally rendering the class name based on if we are signed in or not 
// will use prop named isGoogleSignIn 
// if isGoogleSignIn is true the google-sign-in class name will be added with the custom-button class.
// Otherwise only custom-cutton class name will be added. 
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        className= {`${ inverted ? 'inverted' : ''} ${ 
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;