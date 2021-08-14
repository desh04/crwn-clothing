import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.component.style.css';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)         //to show only four item in the preview section, rest will be shown when click on the title.
                .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} { ...otherItemProps }/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;
