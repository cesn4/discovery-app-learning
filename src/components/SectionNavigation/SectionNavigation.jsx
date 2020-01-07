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
                <div className="posts">
                    <div className="posts__box">
                        <span className="posts__title">{this.props.title}</span>
                        <span className="posts__subtitle">{this.props.subtitle}</span>
                        <p className="posts__text">{this.props.text}</p>
                        <div className="posts__time">
                            <i className="posts__clock"></i>
                            <span className="posts__clock-time">2m ago</span>
                        </div>
                    </div>
                    <div className="posts__box-2">
                        <span className="posts__title-2">{this.props.title2}</span>
                        <span className="posts__subtitle-2">{this.props.subtitle2}</span>
                        <p className="posts__text-2">{this.props.text2}</p>
                        <div className="posts__time-2">
                            <i className="posts__clock-2"></i>
                            <span className="posts__clock-time-2">1h ago</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

SectionNavigation.propTypes = {
    section: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    subtitle2: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired
};

export default SectionNavigation;
