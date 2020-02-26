import React, { FunctionComponent } from 'react';
import { SVGIconProps } from '~/types';

const SVGHome: FunctionComponent<SVGIconProps> = ({
    color,
    size,
}: SVGIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            <path fill={color} d="M0 8l8-8 8 8v8h-5v-6H5v6H0z" />
        </svg>
    );
};

export default SVGHome;
