import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Time from '~/components/Time';

import '~/assets/img/time.png';
import './PostInfo.scss';

const PostInfo: FunctionComponent<PostInfoProps> = ({
    title,
    subtitle,
    primaryText,
    time,
    white= false,
    space= false
}: PostInfoProps) => {
    return (
        <div className={classNames('post-info', { '-space': space })}>
            <div className="post-info__title-box">
                {title && <span className={classNames('post-info__title', { '-white': white })}>{title}</span>}
            </div>
            <div className="post-info__content-box">
                <span className={classNames('post-info__subtitle', { '-white': white }, { '-space': space })}>{subtitle}</span>
                <p className={classNames('post-info__text', { '-white': white })}>{primaryText}</p>
                <Time text={time} />
            </div>
        </div>
    );
};

interface PostInfoProps {
    title?: string;
    subtitle: string;
    primaryText: string;
    time: string;
    white?: boolean;
    space?: boolean;
}

export default PostInfo;
