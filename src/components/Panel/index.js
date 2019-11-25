import React from 'react';

import './panel.css';

export default (props) => {
    return (
        <div className="panel__container col__margin">
            <div className="panel__header">
                { props.header }
            </div>
            <div className="panel__body">
                { props.children }
            </div>
        </div>
    );
}