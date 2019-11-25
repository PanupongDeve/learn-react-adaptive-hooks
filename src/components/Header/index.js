import React from 'react';
import './header.css';

export default (props) => {
    return (
        <div className="header__text">
            {props.header}
        </div>
    );
}