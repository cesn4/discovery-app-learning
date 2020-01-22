import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './NavigationItem.scss';

const NavigationItem = ({ href, icon, title }) => {
    return (
        <div className="navigation-item">
            <a href={href} className="navigation-item__anchor">
                <img src={icon} className="navigation-item__icon"/>
                <span className={classNames('navigation-item__title', { '-active': active })}>{title}</span>
            </a>
        </div>
    );
};

NavigationItem.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool
}

NavigationItem.defaultProps = {
    active: false
}

export default NavigationItem;