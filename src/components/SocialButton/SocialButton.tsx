import React, { FunctionComponent } from 'react';

import { IconType } from '~/components/Icons/Icon';

import Icon from '~/components/Icons';

const SocialButton: FunctionComponent<SocialButtonProps> = ({
    onMouseEnter,
    onMouseLeave,
    color,
    name,
    href = '#',
}: SocialButtonProps) => {
    const className = 'social-button';

    return (
        <div className={className}>
            <a
                href={href}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Icon name={name} color={color} />
            </a>
        </div>
    );
};

interface SocialButtonProps {
    name: IconType;
    href?: string;
    color?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default SocialButton;
