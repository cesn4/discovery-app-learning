/* eslint-disable indent */
import React, { FunctionComponent, ReactChild } from 'react';

import { SVGInstagram } from './assets';
import { SVGFacebook } from './assets/SVGFacebook';
import { SVGTwitter } from './assets/SVGTwitter';
import { SVGWeb } from './assets/SVGWeb';

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
