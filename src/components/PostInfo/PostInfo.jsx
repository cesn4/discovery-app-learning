import React from 'react';
import PropTypes from 'prop-types';

import '~/assets/img/time.png';

import './PostInfo.scss';

const PostInfo = ({ title, subtitle, primaryText, time }) => {
    return (
        <div className="post">
            <span className="post__title">{title}</span>
            <span className="post__subtitle">{subtitle}</span>
            <p className="post__text">{primaryText}</p>
            <div className="post__time">
                <i className="post__clock"></i>
                <span className="post__clock-time">{time}</span>
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
