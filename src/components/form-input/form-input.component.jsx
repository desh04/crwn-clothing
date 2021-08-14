import React from 'react';

import './form-input.style.css';

// making custom input and button component so can make consistent styling through out the webpage
// these will be used in the sign-up option also . 
// so making component so will not have to write the code again.
// button component will be used outside the contact area also like in the cart, in shop page. 
// so button component will be helpful

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input 
            className='form-input' 
            onChange={handleChange} {...otherProps}  // name type value required all will be passed in other props
        />
        {/*label prop will be used to selectivally render a label
        if developer pass the label then this label prop will be created  */}
        {   // if props.value exist then the shrink property will be added  
            label ?
            (<label 
                className={`${otherProps.value.length ? "shrink" : ''} form-input-label`}
            > 
              { label }  
            </label>)
            : null
        }
        
    </div>
);

export default FormInput;
