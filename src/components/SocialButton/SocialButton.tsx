import React, { FunctionComponent, useState } from 'react';

import Icon from '~/components/Icons';

import { IconType } from '~/components/Icons/Icon';
import Colors from '~/styles/export/colors.scss';

const SocialButton: FunctionComponent<SocialButtonProps> = ({
    name,
    href = '#',
}: SocialButtonProps) => {
    const className = 'social-button';
    const [iconColor, setIconColor] = useState(Colors.white);

    const onMouseEnterHandler = (): void => {
        setIconColor(Colors.accent);
    };

    const onMouseLeaveHandler = (): void => {
        setIconColor(Colors.white);
    };

    return (
        <div className={className}>
            <a
                href={href}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Icon name={name} color={iconColor} />
            </a>
        </div>
    );
};

export interface SocialButtonProps {
    name: IconType;
    href?: string;
}

export default SocialButton;
