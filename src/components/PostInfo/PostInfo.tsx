import * as React from 'react';

import Time from '~/components/Time';

import '~/assets/img/time.png';
import './PostInfo.scss';

const PostInfo = ({ title, subtitle, primaryText, time }: PostInfoProps) => {
    return (
        <div className="post-info">
            { title && <span className="post-info__title">{title}</span>}
            <span className="post-info__subtitle">{subtitle}</span>
            <p className="post-info__text">{primaryText}</p>
            <Time text={time}/>
        </div>
    );
};

interface PostInfoProps {
    title?: string;
    subtitle: string;
    primaryText: string;
    time: string;
}

export default PostInfo;
