import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.css';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {   // {title} , in place of this props and props.title can also be used . 
    return (
        <div            
            className={`${size} menu-item`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        > {/*Menu component */}
            <div className="background-image hover" 
                style={{
                backgroundImage: `url(${imageUrl})`
            }}
            ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);