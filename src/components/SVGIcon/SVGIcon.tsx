import React, { FunctionComponent, ReactChild } from 'react';

import './SVGIcon.scss';

const getPath: HTMLBodyElement = (name: string) => {
    switch (name) {
        case 'instagram':
            return (
                    <path
                        className="svg-icon__image"
                        d="M8 1.422a24.53 24.53 0 0 1 3.2.089 4.123 4.123 0 0 1 1.511.267 3.122 3.122 0 0 1 1.511 1.511 4.123 4.123 0 0 1 .267 1.511c0 .8.089 1.067.089 3.2a24.53 24.53 0 0 1-.089 3.2 4.123 4.123 0 0 1-.267 1.511 3.122 3.122 0 0 1-1.511 1.511 4.123 4.123 0 0 1-1.511.267c-.8 0-1.067.089-3.2.089a24.53 24.53 0 0 1-3.2-.089 4.123 4.123 0 0 1-1.511-.267 3.122 3.122 0 0 1-1.511-1.511 4.123 4.123 0 0 1-.267-1.511c0-.8-.089-1.067-.089-3.2a24.53 24.53 0 0 1 .089-3.2 4.123 4.123 0 0 1 .267-1.511A3.192 3.192 0 0 1 2.4 2.4a1.5 1.5 0 0 1 .889-.622A4.123 4.123 0 0 1 4.8 1.511 24.53 24.53 0 0 1 8 1.422M8 0a26.264 26.264 0 0 0-3.289.089 5.488 5.488 0 0 0-1.955.355 3.48 3.48 0 0 0-1.422.889 3.48 3.48 0 0 0-.89 1.423 4.05 4.05 0 0 0-.355 1.955A26.264 26.264 0 0 0 0 8a26.264 26.264 0 0 0 .089 3.289 5.488 5.488 0 0 0 .356 1.956 3.48 3.48 0 0 0 .889 1.422 3.48 3.48 0 0 0 1.422.889 5.488 5.488 0 0 0 1.956.356A26.264 26.264 0 0 0 8 16a26.264 26.264 0 0 0 3.289-.089 5.488 5.488 0 0 0 1.956-.356 3.729 3.729 0 0 0 2.311-2.311 5.488 5.488 0 0 0 .356-1.956C15.911 10.4 16 10.133 16 8a26.264 26.264 0 0 0-.089-3.289 5.488 5.488 0 0 0-.356-1.956 3.48 3.48 0 0 0-.889-1.422 3.48 3.48 0 0 0-1.422-.889 5.488 5.488 0 0 0-1.955-.355A26.264 26.264 0 0 0 8 0m0 3.911A4.023 4.023 0 0 0 3.911 8 4.089 4.089 0 1 0 8 3.911m0 6.756A2.619 2.619 0 0 1 5.333 8 2.619 2.619 0 0 1 8 5.333 2.619 2.619 0 0 1 10.667 8 2.619 2.619 0 0 1 8 10.667m4.267-7.911a.978.978 0 1 0  .978.978.986.986 0 0 0-.978-.978"
                    />
            );
        case 'facebook':
            return (
                    <path
                        className="svg-icon__image"
                        d="M85.422 16V8.711h2.489l.356-2.844h-2.845V4.089c0-.8.267-1.422 1.422-1.422h1.511V.089C88 .089 87.111 0 86.133 0a3.431 3.431 0 0 0-3.644 3.733v2.134H80v2.844h2.489V16z"
                    />
            );
        case 'twitter':
            return (
                    <path
                        className="svg-icon__image"
                        d="M43.067 14.978A9.25 9.25 0 0 0 52.4 5.644V5.2A7.225 7.225 0 0 0 54 3.511a7.379 7.379 0 0 1-1.867.533 3.458 3.458 0 0 0 1.422-1.778 8.153 8.153 0 0 1-2.044.8A3.175 3.175 0 0 0 49.111 2a3.34 3.34 0 0 0-3.289 3.289 1.733 1.733 0 0 0 .089.711 9.19 9.19 0 0 1-6.756-3.467 3.4 3.4 0 0 0-.444 1.689 3.532 3.532 0 0 0 1.422 2.756 3 3 0 0 1-1.511-.444 3.249 3.249 0 0 0 2.667 3.2 2.74 2.74 0 0 1-.889.089 1.513 1.513 0 0 1-.622-.089 3.367 3.367 0 0 0 3.111 2.311 6.711 6.711 0 0 1-4.089 1.422 2.461 2.461 0 0 1-.8-.089 8.39 8.39 0 0 0 5.067 1.6"
                    />
            );
        case 'web':
            return (
                    <path
                        className="svg-icon__image"
                        d="M2.4 2.4A7.263 7.263 0 0 1 8 0a7.263 7.263 0 0 1 5.6 2.4A7.263 7.263 0 0 1 16 8a7.263 7.263 0 0 1-2.4 5.6A7.263 7.263 0 0 1 8 16a7.263 7.263 0 0 1-5.6-2.4A7.984 7.984 0 0 1 0 8a7.263 7.263 0 0 1 2.4-5.6zm6.667 12a3.276 3.276 0 0 0 2-1.2A5.824 5.824 0 0 0 12 10.4a2.208 2.208 0 0 0-.667-1.6A2.347 2.347 0 0 0 9.6 8H8.267a3.893 3.893 0 0 1-1.2-.267 1.21 1.21 0 0 1-.4-.933.693.693 0 0 1 .267-.533A1.011 1.011 0 0 1 7.467 6a.91.91 0 0 1 .667.4c.267.133.4.267.533.267a.8.8 0 0 0 .533-.134A.8.8 0 0 0 9.333 6a2.122 2.122 0 0 0-.667-1.333 5.515 5.515 0 0 0 .667-2.533.287.287 0 0 0-.267-.267A4.122 4.122 0 0 0 8 1.6a6.67 6.67 0 0 0-3.467 1.067 3.357 3.357 0 0 0-1.2 2.667A3.414 3.414 0 0 0 4.4 7.867a3.643 3.643 0 0 0 2.533 1.066v.533a1.712 1.712 0 0 0 .534 1.334 1.942 1.942 0 0 0 1.2.8V14c0 .133 0 .133.133.267s.133.133.267.133z"
                    />
            );
    }
};

const SVGIcon: FunctionComponent<SVGIconProps> = ({ name }: SVGIconProps) => {
    return <svg className="svg-icon">{getPath(name)}</svg>;
};

interface SVGIconProps {
    name: string;
}

export default SVGIcon;
