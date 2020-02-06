/* eslint-disable indent */
import React, { FunctionComponent, ReactChild } from 'react';

import SVGInstagram from './SVGImages/SVGInstagram';
import SVGFacebook from './SVGImages/SVGFacebook';
import SVGTwitter from './SVGImages/SVGTwitter';
import SVGWeb from './SVGImages/SVGWeb';

const SVGIcon: FunctionComponent<SVGIconProps> = ({ name }: SVGIconProps) => {
    const getPath: FunctionComponent<ReactChild> = () => {
        switch (name) {
            case 'instagram':
                return <SVGInstagram />;
            case 'facebook':
                return <SVGFacebook />;
            case 'twitter':
                return <SVGTwitter />;
            case 'web':
                return <SVGWeb />;
            default:
                return <path />;
        }
    };
    return <div>{getPath(name)}</div>;
};

interface SVGIconProps {
    name: 'instagram' | 'web' | 'facebook' | 'twitter';
}

export default SVGIcon;
