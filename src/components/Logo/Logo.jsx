import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = (footer) => {
    return (
        <div className={classNames('logo', { '-footer': footer })}>LOGO</div>
    );
};

Logo.propTypes = {
    footer: PropTypes.bool
};

Logo.defaultProps = {
    footer: false
};

export default Logo;
