import React from 'react';
import classNames from 'classnames';

import './Logo.scss';

const Logo = ({ footer = false }: LogoProps) => { //TODO: pakeisti sita propsa, footer i light
    return (
        <div className={classNames('logo', { '-footer': footer })}>LOGO</div>
    );
};

interface LogoProps {
    footer?: boolean;
}

export default Logo;
