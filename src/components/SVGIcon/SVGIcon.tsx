/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable indent */
import React, { FunctionComponent, ElementType } from 'react';
import classNames from 'classnames';

import SVGInstagram from './assets/SVGInstagram';
import SVGFacebook from './assets/SVGFacebook';
import SVGTwitter from './assets/SVGTwitter';
import SVGWeb from './assets/SVGWeb';
import SVGTopic from './assets/SVGTopic';
import SVGRightArrow from './assets/SVGRightArrow';

import './SVGIcon.scss';

const SVGIcon: FunctionComponent<SVGIconProps> = ({
    name,
    color = '#fff',
    size = 16,
    className,
}: SVGIconProps) => {
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
                return <SVGRightArrow color={color} />;
            default:
                return <path />;
        }
    };
    return (
        <div className={classNames('icon', className)}>{renderIcon(name)}</div>
    );
};

interface SVGIconProps {
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

export default SVGIcon;
