import React from 'react';
import PropTypes from 'prop-types';

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
                    <div className="posts__box-1">
                        <span className="posts__title-1">{this.props.title}</span>
                        <span className="posts__subtitle-1">{this.props.subtitle}</span>
                        <p className="posts__text-1">{this.props.text}</p>
                    </div>
                    <div className="post__box-2">
                        <span className="posts__title-1">{this.props.title2}</span>
                        <span className="posts__subtitle-2">{this.props.subtitle2}</span>
                        <p className="post__text-2">{this.props.text2}</p>
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

SectionNavigation.defaultProps = {
    section: 'text missing',
    title: 'text missing',
    subtitle: 'text missing',
    text: 'text missing',
    title2: 'text missing',
    subtitle2: 'text missing',
    text2: 'text missing'
};

export default SectionNavigation;
