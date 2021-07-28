import React from 'react';
import './homepage.style.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <div class='directory-menu'> {/*component holding menu component*/}
                <div className='menu-item'> {/*Menu component */}
                    <div className="content">
                        <h1 className="title">HAT</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'> {/*Menu component */}
                    <div className="content">
                        <h1 className="title">Shoes</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'> {/*Menu component */}
                    <div className="content">
                        <h1 className="title">Purse</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'> {/*Menu component */}
                    <div className="content">
                        <h1 className="title">WOMEN</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'> {/*Menu component */}
                    <div className="content">
                        <h1 className="title">MEN</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    ); 
} 

export default HomePage;