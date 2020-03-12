import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import PostInfo from '~/components/PostInfo';

import './FeaturedCard.scss';

const FeaturedCard: FunctionComponent<FeaturedCardProps> = ({
    theme,
    title,
    paragraph,
    time,
    background,
    firstItem = false,
    lastItem = false,
    href,
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
        >
            <a className="featured-card__anchor" href={href}>
                <div
                    className="featured-card__background"
                    style={styleBackground}
                >
                    <div className="featured-card__text-box">
                        <PostInfo
                            white
                            title={theme}
                            subtitle={title}
                            primaryText={paragraph}
                            time={time}
                        />
                    </div>
                </div>
            </a>
        </div>
    );
};

export interface FeaturedCardProps {
    href?: string;
    time: string;
    theme: string;
    title: string;
    paragraph: string;
    background: string;
    firstItem?: boolean;
    lastItem?: boolean;
}

export interface FeaturedCardBackgroundObject {
    backgroundImage: string;
}

export default FeaturedCard;
