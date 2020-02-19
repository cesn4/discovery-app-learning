import React, { FunctionComponent, ElementType } from 'react';
import classNames from 'classnames';

import SVGInstagram from './assets/SVGInstagram';
import SVGFacebook from './assets/SVGFacebook';
import SVGTwitter from './assets/SVGTwitter';
import SVGWeb from './assets/SVGWeb';
import SVGTopic from './assets/SVGTopic';
import SVGRightArrow from './assets/SVGRightArrow';

import './Icon.scss';

const Icon: FunctionComponent<IconProps> = ({
    name,
    color,
    size = 16,
    className,
}: IconProps) => {
    const iconProps = { color, size };

    const renderIcon: ElementType = (name: IconType) => {
        switch (name) {
            case 'instagram':
                return <SVGInstagram {...iconProps} color={color} />;
            case 'facebook':
                return <SVGFacebook {...iconProps} color={color} />;
            case 'twitter':
                return <SVGTwitter {...iconProps} color={color} />;
            case 'web':
                return <SVGWeb {...iconProps} color={color} />;
            case 'topic':
                return <SVGTopic {...iconProps} color={color} />;
            case 'rightArrow':
                return <SVGRightArrow color={color} />;
            default:
                return null;
        }
    };
    return (
        <div className={classNames('icon', className)}>{renderIcon(name)}</div>
    );
};

interface IconProps {
    name?: IconType;
    color?: string;
    size?: number;
    className?: string;
}

export type IconType =
    | 'instagram'
    | 'web'
    | 'facebook'
    | 'twitter'
    | 'topic'
    | 'rightArrow';

export default Icon;
