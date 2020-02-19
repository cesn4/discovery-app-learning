import React, { FunctionComponent, useState } from 'react';

import Icon from '~/components/Icons';

import Colors from '~/styles/export/colors.scss';
import './SocialBar.scss';

const SocialBar: FunctionComponent = () => {
    const [iconColor, setIconColor] = useState(Colors.white);

    const onMouseEnterHandler = (): void => {
        setIconColor(Colors.accent);
    };

    const onMouseLeaveHandler = (): void => {
        setIconColor(Colors.white);
    };

    return (
        <div className="social-bar">
            <a
                href="#"
                className="social-bar__icon"
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Icon name="instagram" color={iconColor} />
            </a>
            <a
                href="#"
                className="social-bar__icon"
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Icon name="twitter" color={iconColor} />
            </a>
            <a
                href="#"
                className="social-bar__icon"
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Icon name="facebook" color={iconColor} />
            </a>
            <a
                href="#"
                className="social-bar__icon"
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Icon name="web" color={iconColor} />
            </a>
        </div>
    );
};

export default SocialBar;
