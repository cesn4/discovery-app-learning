import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Logo.scss';

const Logo: FunctionComponent<LogoProps> = ({ light = false, accent = false }: LogoProps) => {
    //TODO: pakeisti sita propsa, footer i light
    return (
        <div className={classNames('logo', { '-light': light }, { '-accent': accent })}>LOGO</div>
    );
};

interface LogoProps {
    light?: boolean;
    accent?: boolean;
}

export default Logo;
