import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import './header.style.scss';
import { dom } from 'aria-query';

//Logo will be link to the homepage . 
// will use link from the react-router-dom for this 

const Header = () => {
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
            </div>

        </div>
    )
}

export default Header;