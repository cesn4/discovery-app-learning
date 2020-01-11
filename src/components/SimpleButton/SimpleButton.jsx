import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

const SimpleButton = ({ title, href }) => {
    return (
        <a href={href} className="button">{title}</a>
    );
};

SimpleButton.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string.isRequired
};

SimpleButton.defaultProps = {
    href: '#'
};

export default SimpleButton;
