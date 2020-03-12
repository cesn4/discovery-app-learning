import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import PostInfo from '~/components/PostInfo';

import './SmallCard.scss';

const SmallCard: FunctionComponent<SmallCardProps> = ({
    image,
    title,
    time,
    href,
    firstItem = false,
}: SmallCardProps) => {
    const scrollToTop: VoidFunction = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className={classNames('small-card', { '-firstItem': firstItem })}>
            <a href={href} className="small-card__anchor" onClick={scrollToTop}>
                <img src={image} alt="" className="small-card__image" />
                <PostInfo subtitle={title} time={time} />
            </a>
        </div>
    );
};

export interface SmallCardProps {
    href?: string;
    image: string;
    title: string;
    time: string;
    firstItem?: boolean;
}

export default SmallCard;
