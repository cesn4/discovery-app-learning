import React, { FunctionComponent, ElementType } from 'react';
import classNames from 'classnames';

import SVGInstagram from './assets/SVGInstagram';
import SVGFacebook from './assets/SVGFacebook';
import SVGTwitter from './assets/SVGTwitter';
import SVGWeb from './assets/SVGWeb';
import SVGTopic from './assets/SVGTopic';
import SVGRightArrow from './assets/SVGRightArrow';
import SVGTime from './assets/SVGTime';
import SVGSend from './assets/SVGSend';

import './Icon.scss';

const Icon: FunctionComponent<IconProps> = ({
    name,
    color = '#999',
    size = 16,
    className,
}: IconProps) => {
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
            case 'topic':
                return <SVGTopic {...iconProps} />;
            case 'rightArrow':
                return <SVGRightArrow {...iconProps} />;
            case 'time':
                return <SVGTime {...iconProps} />;
            case 'send':
                return <SVGSend {...iconProps} />;
            default:
                return null;
        }
    };
    return (
        <div className={classNames('icon', className)}>{renderIcon(name)}</div>
    );
};

export interface IconProps {
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
    | 'rightArrow'
    | 'time'
    | 'send';

export default Icon;
