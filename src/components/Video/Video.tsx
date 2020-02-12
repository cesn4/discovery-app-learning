import React, { FunctionComponent } from 'react';
import ReactPlayer from 'react-player';

import './Video.scss';

const Video: FunctionComponent<VideoProps> = ({ url }: VideoProps) => {
    // eslint-disable-next-line @typescript-eslint/typedef
    const className = 'video';

    return (
        <div className={className}>
            <ReactPlayer
                className={`${className}__react-player`}
                url={url}
                controls={true}
                muted
                playing
                height="100%"
                width="100%"
            />
        </div>
    );
};

interface VideoProps {
    url?: string;
}

export default Video;
