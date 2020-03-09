import React, { FunctionComponent } from 'react';
import { SVGIconProps } from '~/types';

const SVGFacebook: FunctionComponent<SVGIconProps> = ({
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
            <g id="facebook" transform="translate(-1250 -2006)">
                <path
                    fill={color}
                    data-name="Rectangle 392"
                    transform="translate(1250 2006)"
                />
                <path
                    fill={color}
                    d="M85.422 16V8.711h2.489l.356-2.844h-2.845V4.089c0-.8.267-1.422 1.422-1.422h1.511V.089C88 .089 87.111 0 86.133 0a3.431 3.431 0 0 0-3.644 3.733v2.134H80v2.844h2.489V16z"
                    transform="translate(1174 2006.001)"
                />
            </g>
        </svg>
    );
};

export default SVGFacebook;
