import React from 'react';
import PropTypes from 'prop-types';

import './NavigationItem.scss';

const NavigationItem = () => {
    return (
        <div className="navigation-item">
            <a href="#" className="sidebar__nav-anchor"><img src={home} className="sidebar__img"/><li className="sidebar__nav-item -active">Home</li></a>
        </div>
    );
};

export default NavigationItem;