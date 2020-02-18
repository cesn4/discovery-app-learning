import React, { FunctionComponent } from 'react';
import { SVGIconProps } from '~/types';

const SVGInstagram: FunctionComponent<SVGIconProps> = ({
    color,
    size,
}: SVGIconProps) => {
    return (
        <div>
            <svg
                width={size}
                height={size}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${size} ${size}`}
            >
                <g transform="translate(-1170 -2006)">
                    <path
                        fill={color}
                        d="M8 1.422a24.53 24.53 0 0 1 3.2.089 4.123 4.123 0 0 1 1.511.267 3.122 3.122 0 0 1 1.511 1.511 4.123 4.123 0 0 1 .267 1.511c0 .8.089 1.067.089 3.2a24.53 24.53 0 0 1-.089 3.2 4.123 4.123 0 0 1-.267 1.511 3.122 3.122 0 0 1-1.511 1.511 4.123 4.123 0 0 1-1.511.267c-.8 0-1.067.089-3.2.089a24.53 24.53 0 0 1-3.2-.089 4.123 4.123 0 0 1-1.511-.267 3.122 3.122 0 0 1-1.511-1.511 4.123 4.123 0 0 1-.267-1.511c0-.8-.089-1.067-.089-3.2a24.53 24.53 0 0 1 .089-3.2 4.123 4.123 0 0 1 .267-1.511A3.192 3.192 0 0 1 2.4 2.4a1.5 1.5 0 0 1 .889-.622A4.123 4.123 0 0 1 4.8 1.511 24.53 24.53 0 0 1 8 1.422M8 0a26.264 26.264 0 0 0-3.289.089 5.488 5.488 0 0 0-1.955.355 3.48 3.48 0 0 0-1.422.889 3.48 3.48 0 0 0-.89 1.423 4.05 4.05 0 0 0-.355 1.955A26.264 26.264 0 0 0 0 8a26.264 26.264 0 0 0 .089 3.289 5.488 5.488 0 0 0 .356 1.956 3.48 3.48 0 0 0 .889 1.422 3.48 3.48 0 0 0 1.422.889 5.488 5.488 0 0 0 1.956.356A26.264 26.264 0 0 0 8 16a26.264 26.264 0 0 0 3.289-.089 5.488 5.488 0 0 0 1.956-.356 3.729 3.729 0 0 0 2.311-2.311 5.488 5.488 0 0 0 .356-1.956C15.911 10.4 16 10.133 16 8a26.264 26.264 0 0 0-.089-3.289 5.488 5.488 0 0 0-.356-1.956 3.48 3.48 0 0 0-.889-1.422 3.48 3.48 0 0 0-1.422-.889 5.488 5.488 0 0 0-1.955-.355A26.264 26.264 0 0 0 8 0m0 3.911A4.023 4.023 0 0 0 3.911 8 4.089 4.089 0 1 0 8 3.911m0 6.756A2.619 2.619 0 0 1 5.333 8 2.619 2.619 0 0 1 8 5.333 2.619 2.619 0 0 1 10.667 8 2.619 2.619 0 0 1 8 10.667m4.267-7.911a.978.978 0 1 0 .978.978.986.986 0 0 0-.978-.978"
                        className="svg-icon__image"
                        transform="translate(1170 2006)"
                    />
                </g>
            </svg>
        </div>
    );
};

export default SVGInstagram;
