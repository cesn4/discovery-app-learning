import React from 'react';
import PropTypes from 'prop-types';

import PostInfo from '~/components/PostInfo';

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
                    <PostInfo title="Travel" subtitle="Article title" text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…" time="2m ago"/>
                    <PostInfo title="Technology" subtitle="Article title" text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…" time="1h ago"/>
                </div>
            </div>
        );
    }
};

SectionNavigation.propTypes = {
    section: PropTypes.string.isRequired
};

export default SectionNavigation;
