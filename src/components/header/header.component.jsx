import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utilis';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { connect } from 'react-redux';

import './header.style.css';
//import { dom } from 'aria-query';

//Logo will be link to the homepage . 
// will use link from the react-router-dom for this 

const Header = ({ currentUser, hidden }) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>  {/* Link component is html <a> tag only */}
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                <Link>
                    { currentUser ? 
                    <div className='option' onClick ={ () => auth.signOut() }> SIGN OUT </div>
                    :
                    <Link className='option' to='signIn'> SIGN IN </Link> }
                </Link>
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
            
        </div>
    )
};

// destructuring nested values = {user: { currentUser }, cart: { hidden }}
const mapStateToProps = (state) => ({
    currentUser : selectCurrentUser(state), 
    hidden : selectCartHidden(state)
});

/* // alternate to above code 
const mapStateToProps = createStructuredSelector(
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
)
*/

export default connect(mapStateToProps)(Header);