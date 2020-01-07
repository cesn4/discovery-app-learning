import React from 'react';
import PropTypes from 'prop-types';

import '~/assets/img/arrowLeft.png';
import '~/assets/img/arrowRight.png';
import '~/assets/img/time.png';

import './SectionNavigation.scss';

class SectionNavigation extends React.Component {
    render () {
        return (
            <div className="section">
                <div className="section__title-box">
                    <span className="section__title">{this.props.section}</span>
                    <i className="section__button -left"></i>
                    <i className="section__button -right"></i>
                </div>
            </div>
        );
    }
};

SectionNavigation.propTypes = {
    section: PropTypes.string.isRequired
};

export default SectionNavigation;
