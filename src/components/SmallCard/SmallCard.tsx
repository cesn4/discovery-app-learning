import React from 'react';
import classNames from 'classnames';

import Time from '~/components/Time';

import './SmallCard.scss';

const SmallCard = ({ image, title, time, firstItem = false }: SmallCardProps) => {
    return (
        <div className={classNames('small-card', { '-firstItem': firstItem })}>
            <img src={image} alt="" className="small-card__image" />
            <div className="small-card__text">
                <div className="small-card__title">{title}</div>
                <Time text={time} />
            </div>
        </div>
    );
};

interface SmallCardProps {
    image: string;
    title: string;
    time: string;
    firstItem?: boolean;
}

export default SmallCard;
