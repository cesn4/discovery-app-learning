import React, { FunctionComponent } from 'react';
import { SVGIconProps } from '~/types';

const SVGTime: FunctionComponent<SVGIconProps> = ({
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
            <g transform="translate(-274 -998)">
                <path
                    fill={color}
                    d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6,6,6,0,0,1-6,6ZM9,7.6l2.7,2.7-1.4,1.4L7,8.4V3H9Z"
                    transform="translate(274 998)"
                />
            </g>
        </svg>
    );
};

export default SVGTime;
