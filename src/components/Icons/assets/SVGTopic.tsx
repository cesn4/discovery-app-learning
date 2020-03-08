import React, { FunctionComponent } from 'react';

const SVGTopic: FunctionComponent<SVGTopicProps> = ({
    size,
    color,
}: SVGTopicProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            <g transform="translate(-994 -363.001)">
                <path
                    fill={color}
                    d="M-3813 25h-14V9h14v16zm-12-2h10V11h-10zm2-4v-2h6v2zm0-4v-2h6v2z"
                    transform="translate(4821 354)"
                />
            </g>
        </svg>
    );
};

interface SVGTopicProps {
    color?: string;
    size: number;
}

export default SVGTopic;
