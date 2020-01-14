import React from 'react';
import PropTypes from 'prop-types';

import Time from '~/components/Time';

import './SmallCard.scss';

const SmallCard = ({ image, title, time }) => {
    return (
        <div className="small-card">
            <img src={image} alt="" className="small-card__image"/>
            <div className="small-card__text">
                <div className="small-card__title">{title}</div>
                <Time timeText={time}/>
            </div>
        </div>
    );
};

SmallCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default SmallCard;
