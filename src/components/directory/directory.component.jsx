import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.css';

//going to use class cause it will require state value of menu item to pass 
class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div class='directory-menu'> {/*component holding menu component*/}
                {   // could also be passed as like title = {sections.title}
                    // Using destructring so, does not have to write sections. every time 
                    this.state.sections.map( ({ id, ...otherSectionProps }) => (
                      <MenuItem key={id} {...otherSectionProps} />
                    )) 
                    
                }
            </div>
        )
    }
}

export default Directory;