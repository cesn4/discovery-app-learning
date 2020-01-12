import React from 'react';
import PropTypes from 'prop-types';

import '~/assets/img/time.png';

import './PostInfo.scss';

const PostInfo = ({ title, subtitle, primaryText, time }) => {
    return (
        <div className="post-info">
            <span className="post-info__title">{title}</span>
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
    time: PropTypes.string.isRequired
};

export default PostInfo;
