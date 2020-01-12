import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '~/assets/img/arrowLeft.png';
import '~/assets/img/arrowRight.png';
import '~/assets/img/time.png';

import './SectionNavigation.scss';

const SectionNavigation = ({ title, knight }) => {
    return (
        <div className={classNames('section-navigation', { '-knight': knight })}>
            <div className="section-navigation__title-box">
                <span className="section-navigation__title">{title}</span>
                <i className="section-navigation__button -left"></i>
                <i className="section-navigation__button -right"></i>
            </div>
        </div>
    );
};

SectionNavigation.propTypes = {
    title: PropTypes.string.isRequired,
    knight: PropTypes.bool
};

SectionNavigation.defaultprops = {
    knight: false
};

export default SectionNavigation;
