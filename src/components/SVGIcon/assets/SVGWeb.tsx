import React, { FunctionComponent } from 'react';

export const SVGWeb: FunctionComponent<SVGWebProps> = ({
    color,
    size,
}: SVGWebProps) => {
    return (
        <div>
            <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <g transform="translate(-1290 -2006)">
                    <path
                        fill={color}
                        d="M2.4 2.4A7.263 7.263 0 0 1 8 0a7.263 7.263 0 0 1 5.6 2.4A7.263 7.263 0 0 1 16 8a7.263 7.263 0 0 1-2.4 5.6A7.263 7.263 0 0 1 8 16a7.263 7.263 0 0 1-5.6-2.4A7.984 7.984 0 0 1 0 8a7.263 7.263 0 0 1 2.4-5.6zm6.667 12a3.276 3.276 0 0 0 2-1.2A5.824 5.824 0 0 0 12 10.4a2.208 2.208 0 0 0-.667-1.6A2.347 2.347 0 0 0 9.6 8H8.267a3.893 3.893 0 0 1-1.2-.267 1.21 1.21 0 0 1-.4-.933.693.693 0 0 1 .267-.533A1.011 1.011 0 0 1 7.467 6a.91.91 0 0 1 .667.4c.267.133.4.267.533.267a.8.8 0 0 0 .533-.134A.8.8 0 0 0 9.333 6a2.122 2.122 0 0 0-.667-1.333 5.515 5.515 0 0 0 .667-2.533.287.287 0 0 0-.267-.267A4.122 4.122 0 0 0 8 1.6a6.67 6.67 0 0 0-3.467 1.067 3.357 3.357 0 0 0-1.2 2.667A3.414 3.414 0 0 0 4.4 7.867a3.643 3.643 0 0 0 2.533 1.066v.533a1.712 1.712 0 0 0 .534 1.334 1.942 1.942 0 0 0 1.2.8V14c0 .133 0 .133.133.267s.133.133.267.133z"
                        className="svg-icon__image"
                        transform="translate(1290 2006)"
                    />
                </g>
            </svg>
        </div>
    );
};

interface SVGWebProps {
    color: string;
    size: number;
}

export default SVGWeb;