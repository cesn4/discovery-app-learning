import React from 'react';
import PropTypes from 'prop-types';

import Time from '~/components/Time';

import './FeaturedCard.scss';

const FeaturedCard = ({ time }) => {
    return (
        <div className="featured-card">Card
            <div className="featured-card__tex-box">
                <span className="featured-card__theme"></span>
                <span className="featured-card__title"></span>
                <p className="featured-card__paragraph"></p>
                <Time timeText={time}/>
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    time: PropTypes.string.isRequired
};

export default FeaturedCard;
