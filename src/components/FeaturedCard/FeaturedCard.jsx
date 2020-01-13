import React from 'react';
import PropTypes from 'prop-types';

import Time from '~/components/Time';

import './FeaturedCard.scss';

const FeaturedCard = ({ theme, title, paragraph, time, background }) => {
    return (
        <div className="featured-card" src={background}>
            <div className="featured-card__tex-box">
                <span className="featured-card__theme">{theme}</span>
                <span className="featured-card__title">{title}</span>
                <p className="featured-card__paragraph">{paragraph}</p>
                <Time timeText={time}/>
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    time: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
};

export default FeaturedCard;
