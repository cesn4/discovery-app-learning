import React from 'react';
import PropTypes from 'prop-types';

import '~/assets/img/time.png';

import './PostInfo.scss';

class PostInfo extends React.Component {
    render () {
        return (
            <div className="post">
                <span className="post__title">{this.props.title}</span>
                <span className="post__subtitle">{this.props.subtitle}</span>
                <p className="post__text">{this.props.text}</p>
                <div className="post__time">
                    <i className="post__clock"></i>
                    <span className="post__clock-time">{this.props.time}</span>
                </div>
            </div>
        );
    }
}

PostInfo.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default PostInfo;
