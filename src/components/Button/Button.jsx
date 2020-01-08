import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends React.Component {
    render () {
        return (
            <a href="#" className="button">{this.props.buttonName}</a>
        );
    }
};

Button.propTypes = {
    buttonName: PropTypes.string.isRequired
};

export default Button;
