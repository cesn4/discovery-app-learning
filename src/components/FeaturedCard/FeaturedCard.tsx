import * as React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Time from '~/components/Time';

import './FeaturedCard.scss';

const FeaturedCard = ({ theme, title, paragraph, time, background, firstItem, lastItem }) => {
    const styleBackground = {
        backgroundImage: 'url(' + background + ')'
    };
    return (
        <div className={classNames('featured-card', { '-first-item': firstItem }, { '-last-item': lastItem })} style={styleBackground}>
            <div className="featured-card__text-box">
                <span className="featured-card__theme">{theme}</span>
                <span className="featured-card__title">{title}</span>
                <p className="featured-card__paragraph">{paragraph}</p>
                <Time marginless text={time}/>
            </div>
        </div>
    );
};

FeaturedCard.propTypes = {
    time: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    firstItem: PropTypes.bool,
    lastItem: PropTypes.bool
};

FeaturedCard.defautProp = {
    firstItem: false,
    lastItem: false
};

export default FeaturedCard;
