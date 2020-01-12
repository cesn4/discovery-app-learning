import React from 'react';
import PropTypes from 'prop-types';

import './TrendingCard.scss';

const TrendingCard = ({ title, time, paragraphText }) => {
    return (
        <div className="card">
            <div className="card__background"></div>
            <div className="card__text-box">
                <span className="card__title">{title}</span>
                <p className="card__paragraph-text">{paragraphText}</p>
            </div>
            <div className="post__time">
                <i className="post__clock"></i>
                <span className="post__clock-time">{time}</span>
            </div>
        </div>
    );
};

TrendingCard.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default TrendingCard;
