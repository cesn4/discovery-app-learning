import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Time from '~/components/Time';

import './SmallCard.scss';

const SmallCard = ({ image, title, time, firstItem }) => {
    return (
        <div className={classNames('small-card', { '-firstItem': firstItem })}>
            <img src={image} alt="" className="small-card__image"/>
            <div className="small-card__text">
                <div className="small-card__title">{title}</div>
                <Time text={time}/>
            </div>
        </div>
    );
};

SmallCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    firstItem: PropTypes.bool
};

SmallCard.defaultProp = {
    firstItem: false
};

export default SmallCard;
