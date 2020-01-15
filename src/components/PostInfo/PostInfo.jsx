import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '~/assets/img/time.png';

import './PostInfo.scss';

const PostInfo = ({ title, subtitle, primaryText, time, trending, image }) => {
    return (
        <div className="post-info">
            <img className={classNames('post-info__background', { '-trending': trending })} src={image} />
            <span className={classNames('post-info__title', { '-trending': trending })}>{title}</span>
            <span className="post-info__subtitle">{subtitle}</span>
            <p className="post-info__text">{primaryText}</p>
            <div className="post-info__time">
                <i className="post-info__clock"></i>
                <span className="post-info__clock-time">{time}</span>
            </div>
        </div>
    );
};

PostInfo.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    primaryText: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    trending: PropTypes.bool,
    image: PropTypes.string.isRequired
};

PostInfo.defaultProps = {
    trending: false
};

export default PostInfo;
