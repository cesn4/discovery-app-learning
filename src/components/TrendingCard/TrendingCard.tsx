import React, { FunctionComponent } from 'react';

import PostInfo from '~/components/PostInfo';

import './TrendingCard.scss';

const TrendingCard: FunctionComponent<TrendingCardProps> = ({
    image,
    subtitle,
    primaryText,
    time,
}: TrendingCardProps) => {
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

export interface TrendingCardProps {
    image: string;
    subtitle: string;
    primaryText: string;
    time: string;
}

export default TrendingCard;
