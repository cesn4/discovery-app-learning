import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

class SimpleButton extends React.Component {
    render () {
        return (
            <a href="#" className="button">{this.props.buttonName}</a>
        );
    }
};

SimpleButton.propTypes = {
    buttonName: PropTypes.string.isRequired
};

export default SimpleButton;
