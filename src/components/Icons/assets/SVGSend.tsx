import React, { FunctionComponent } from 'react';

import { SVGIconProps } from '~/types';

const SVGSend: FunctionComponent<SVGIconProps> = ({
    size,
    color,
}: SVGIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            <g id="send" transform="translate(-1147 -2062)">
                <path
                    id="send-2"
                    d="M10 16L8 8 0 6l16-6z"
                    fill={color}
                    data-name="send"
                    transform="translate(1147 2062)"
                />
            </g>
        </svg>
    );
};

export default SVGSend;
