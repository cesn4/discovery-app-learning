import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Time from '~/components/Time';

import './FeaturedCard.scss';

const FeaturedCard: FunctionComponent<FeaturedCardProps> = ({
    theme,
    title,
    paragraph,
    time,
    background,
    firstItem = false,
    lastItem = false,
}: FeaturedCardProps) => {
    const styleBackground: FeaturedCardBackgroundObject = {
        backgroundImage: 'url(' + background + ')',
    };
    return (
        <div
            className={classNames(
                'featured-card',
                { '-first-item': firstItem },
                { '-last-item': lastItem }
            )}
            style={styleBackground}
        >
            <div className="featured-card__text-box">
                <span className="featured-card__theme">{theme}</span>
                <span className="featured-card__title">{title}</span>
                <p className="featured-card__paragraph">{paragraph}</p>
                <Time marginless text={time} />
            </div>
        </div>
    );
};

interface FeaturedCardProps {
    time: string;
    theme: string;
    title: string;
    paragraph: string;
    background: string;
    firstItem?: boolean;
    lastItem?: boolean;
}

interface FeaturedCardBackgroundObject {
    backgroundImage: string;
}

export default FeaturedCard;
