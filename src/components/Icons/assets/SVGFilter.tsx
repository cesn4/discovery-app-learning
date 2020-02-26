import React, { FunctionComponent } from 'react';
import { SVGIconProps } from '~/types';

const SVGFilter: FunctionComponent<SVGIconProps> = ({
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
            <g transform="translate(-1462 -104)">
                <path
                    fill={color}
                    d="M16 1v2H5.7a1.945 1.945 0 0 1-3.4 0H0V1h2.3a1.945 1.945 0 0 1 3.4 0zm-4 5a1.936 1.936 0 0 0-1.7 1H0v2h10.3a1.945 1.945 0 0 0 3.4 0H16V7h-2.3A1.936 1.936 0 0 0 12 6zm-4 6a1.936 1.936 0 0 0-1.7 1H0v2h6.3a1.945 1.945 0 0 0 3.4 0H16v-2H9.7A1.936 1.936 0 0 0 8 12z"
                    data-name="filter"
                    transform="translate(1462 104)"
                />
            </g>
        </svg>
    );
};

export default SVGFilter;
