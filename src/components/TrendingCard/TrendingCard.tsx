import React, { FunctionComponent } from 'react';

import PostInfo from '~/components/PostInfo';

import './TrendingCard.scss';

const TrendingCard: FunctionComponent<TrendingCardProps> = ({
    href,
    image,
    subtitle,
    primaryText,
    time,
}: TrendingCardProps) => {
    return (
        <div className="trending-card">
            <a href={href} className="trending-card__anchor">
                <img src={image} className="trending-card__image" />
                <div className="trending-card__content">
                    <PostInfo
                        subtitle={subtitle}
                        primaryText={primaryText}
                        time={time}
                    />
                </div>
            </a>
        </div>
    );
};

export interface TrendingCardProps {
    href?: string;
    image: string;
    subtitle: string;
    primaryText: string;
    time: string;
}

export default TrendingCard;
