import React, { FunctionComponent } from 'react';
import { SVGIconProps } from '~/types';

const SVGBack: FunctionComponent<SVGIconProps> = ({
    color,
    size,
}: SVGIconProps) => {
    return (
        <svg
            className="svg-icon"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${size} ${size}`}
        >
            <g data-name="Arrow Back" transform="translate(-36 -92)">
                <path
                    fill={color}
                    d="M16 7H3.8l5.6-5.6L8 0 0 8l8 8 1.4-1.4L3.8 9H16z"
                    data-name="Arrow Back"
                    transform="translate(36 92)"
                />
            </g>
        </svg>
    );
};

export default SVGBack;
