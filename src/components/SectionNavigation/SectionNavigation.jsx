import React from 'react';
import PropTypes from 'prop-types';

import '~/assets/img/arrowLeft.png';
import '~/assets/img/arrowRight.png';
import '~/assets/img/time.png';

import './SectionNavigation.scss';

const SectionNavigation = ({ title }) => {
    return (
        <div className="section">
            <div className="section__title-box">
                <span className="section__title">{title}</span>
                <i className="section__button -left"></i>
                <i className="section__button -right"></i>
            </div>
        </div>
    );
};

SectionNavigation.propTypes = {
    title: PropTypes.string.isRequired
};

export default SectionNavigation;
