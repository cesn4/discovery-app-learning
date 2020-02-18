import React, { FunctionComponent } from 'react';

const SVGRightArrow: FunctionComponent<SVGRightArrowProps> = ({
    color,
}: SVGRightArrowProps) => {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
            >
                <path
                    fill={color}
                    d="M5 6a.908.908 0 0 1-.7-.3l-4-4A.967.967 0 0 1 .3.3a.967.967 0 0 1 1.4 0L5 3.6 8.3.3a.967.967 0 0 1 1.4 0 .967.967 0 0 1 0 1.4l-4 4A.908.908 0 0 1 5 6z"
                    transform="rotate(-90 5 5)"
                />
            </svg>
        </div>
    );
};

interface SVGRightArrowProps {
    color?: string;
}

export default SVGRightArrow;
