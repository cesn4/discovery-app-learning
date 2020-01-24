import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Logo.scss';

const Logo: FunctionComponent<LogoProps> = ({ light = false }: LogoProps) => {
    return (
        <div className={classNames('logo', { '-light': light })}>LOGO</div>
    );
};

interface LogoProps {
    light?: boolean;
}

export default Logo;
