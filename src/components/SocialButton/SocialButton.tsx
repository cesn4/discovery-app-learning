import React, { FunctionComponent, useState, Fragment } from 'react';

import { IconType } from '~/components/Icons/Icon';
import Icon from '~/components/Icons';

import Colors from '~/styles/export/colors.scss';

const SocialButton: FunctionComponent<SocialButtonProps> = ({
    name,
    href = '#',
}: SocialButtonProps) => {
    const [iconColor, setIconColor] = useState(Colors.white);

    const onMouseEnterHandler = (): void => {
        setIconColor(Colors.accent);
    };

    const onMouseLeaveHandler = (): void => {
        setIconColor(Colors.white);
    };

    return (
        <Fragment>
            <a
                href={href}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <Icon name={name} color={iconColor} />
            </a>
        </Fragment>
    );
};

export interface SocialButtonProps {
    name: IconType;
    href?: string;
}

export default SocialButton;
