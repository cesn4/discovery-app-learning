import React from 'react';

import PostInfo from '~/components/PostInfo';

import './TrendingCard.scss';

const TrendingCard = ({ image, subtitle, primaryText, time }: TrendingCard) => {
    return (
        <div className="trending-card">
            <img src={image} className="trending-card__image" />
            <div className="trending-card__content">
                <PostInfo
                    subtitle={subtitle}
                    primaryText={primaryText}
                    time={time}
                />
            </div>
        </div>
    );
};

interface TrendingCard {
    image: string;
    subtitle: string;
    primaryText: string;
    time: string;
}

export default TrendingCard;
