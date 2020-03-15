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
    white = false,
}: PostInfoProps) => {
    return (
        <div className={classNames('post-info', { '-white': white })}>
            {title && (
                <span
                    className={classNames('post-info__title', {
                        '-white': white,
                    })}
                >
                    {title}
                </span>
            )}
            {subtitle && (
                <span
                    className={classNames('post-info__subtitle', {
                        '-white': white,
                    })}
                >
                    {subtitle}
                </span>
            )}
            {primaryText && (
                <p
                    className={classNames('post-info__text', {
                        '-white': white,
                    })}
                >
                    {primaryText}
                </p>
            )}
            {time && <Time text={time} />}
        </div>
    );
};

export interface PostInfoProps {
    title?: string;
    subtitle?: string;
    primaryText?: string;
    time?: string;
    white?: boolean;
    href?: string;
}

export default PostInfo;
