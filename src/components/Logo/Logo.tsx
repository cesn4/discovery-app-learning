import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Logo.scss';

const Logo: FunctionComponent<LogoProps> = ({
    light = false,
    accent = false,
    title,
}: LogoProps) => {
    return (
        <div
            className={classNames(
                'logo',
                { '-light': light },
                { '-accent': accent }
            )}
        >
            {title}
        </div>
    );
};

interface LogoProps {
    title: string;
    light?: boolean;
    accent?: boolean;
}

export default Logo;
