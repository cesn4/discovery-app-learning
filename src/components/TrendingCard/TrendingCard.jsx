import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Time from '~/components/Time';

import './TrendingCard.scss';

const TrendingCard = ({ title, time, paragraphText, image, firstItem }) => {
    return (
        <div className={classNames('trending-card', { '-firstItem': firstItem })} >
            <img className="trending-card__background" src={image} />
            <div className="trending-card__text-box">
                <span className="trending-card__title">{title}</span>
                <p className="trending-card__paragraph-text">{paragraphText}</p>
                <Time timeText={time}/>
            </div>
        </div>
    );
};

TrendingCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    firstItem: PropTypes.bool
};

TrendingCard.defaultProp = {
    firstItem: false
};

export default TrendingCard;
