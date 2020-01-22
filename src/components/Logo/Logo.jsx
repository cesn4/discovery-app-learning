import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = ({ footer, sidebar }) => {
    return (
        <div className={classNames('logo', { '-footer': footer }, { '-sidebar': sidebar })}>LOGO</div>
    );
};

Logo.propTypes = {
    footer: PropTypes.bool,
    sidebar: PropTypes.bool
};

Logo.defaultProps = {
    footer: false,
    sidebar: false
};

export default Logo;
