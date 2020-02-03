import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import PostInfo from '~/components/PostInfo';

import './SmallCard.scss';

const SmallCard: FunctionComponent<SmallCardProps> = ({
    image,
    title,
    time,
    firstItem = false,
}: SmallCardProps) => {
    return (
        <div className={classNames('small-card', { '-firstItem': firstItem })}>
            <img src={image} alt="" className="small-card__image" />
            <PostInfo subtitle={title} time={time} />
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
