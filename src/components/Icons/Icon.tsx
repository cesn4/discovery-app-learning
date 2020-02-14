/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable indent */
import React, { FunctionComponent, ElementType } from 'react';

import SVGInstagram from './assets/SVGInstagram';
import SVGFacebook from './assets/SVGFacebook';
import SVGTwitter from './assets/SVGTwitter';
import SVGWeb from './assets/SVGWeb';

import './Icon.scss';

const Icon: FunctionComponent<IconProps> = ({
    name,
    color = '#fff',
    size = 16,
}: IconProps) => {
    const className = 'icon';
    const iconProps = { color, size };

    const renderIcon: ElementType = (name: IconType) => {
        switch (name) {
            case 'instagram':
                return <SVGInstagram {...iconProps} />;
            case 'facebook':
                return <SVGFacebook {...iconProps} />;
            case 'twitter':
                return <SVGTwitter {...iconProps} />;
            case 'web':
                return <SVGWeb {...iconProps} />;
            default:
                return <path />;
        }
    };
    return <div className={className}>{renderIcon(name)}</div>;
};

interface IconProps {
    name?: IconType;
    color?: string;
    size?: number;
}

export type IconType = 'instagram' | 'web' | 'facebook' | 'twitter';

export default Icon;
