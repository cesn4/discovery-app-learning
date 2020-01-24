import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '~/assets/img/arrowLeft.png';
import '~/assets/img/arrowRight.png';
import '~/assets/img/time.png';

import './SectionNavigation.scss';

const SectionNavigation = ({ title, borderless }) => {
    return (
        <div className={classNames('section-navigation', { '-borderless': borderless })}>
            <div className={classNames('section-navigation__title-box', { '-borderless': borderless })}>
                <span className="section-navigation__title">{title}</span>
                <i className="section-navigation__button -left"></i>
                <i className="section-navigation__button -right"></i>
            </div>
        </div>
    );
};

SectionNavigation.propTypes = {
    title: PropTypes.string.isRequired,
    borderless: PropTypes.bool
};

SectionNavigation.defaultprops = {
    borderless: false
};

export default SectionNavigation;
