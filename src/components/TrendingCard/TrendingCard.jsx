import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '~/assets/img/time.png';
import './TrendingCard.scss';

const TrendingCard = ({ title, time, paragraphText, notVisible, image }) => {
    return (
        <div className={classNames('card', { '-notVisible': notVisible })} >
            <img className="card__background" src={image} />
            <div className="card__text-box">
                <span className="card__title">{title}</span>
                <p className="card__paragraph-text">{paragraphText}</p>
                <div className="card__time">
                    <i className="card__clock"></i>
                    <span className="card__clock-time">{time}</span>
                </div>
            </div>
        </div>
    );
};

TrendingCard.propTypes = {
    notVisible: PropTypes.bool,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

TrendingCard.defaultProp = {
    notVisibile: false
};

export default TrendingCard;
