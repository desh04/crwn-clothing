import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {   // {title} , in place of this props and props.title can also be used . 
    return (
        <div            
            className={`${size} menu-item`}
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

export default MenuItem;