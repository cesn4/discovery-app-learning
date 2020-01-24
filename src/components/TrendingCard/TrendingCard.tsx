import * as React from 'react';
import PropTypes from 'prop-types';

import PostInfo from '~/components/PostInfo';

import './TrendingCard.scss';

const TrendingCard = ({ image, subtitle, primaryText, time }) => {
    return (
        <div className="trending-card">
            <img src={image} className="trending-card__image"/>
            <div className="trending-card__content">
                <PostInfo subtitle={subtitle} primaryText={primaryText} time={time}/>
            </div>
        </div>
    );
};

TrendingCard.propTypes = {
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    primaryText: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default TrendingCard;
