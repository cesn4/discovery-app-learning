import React from 'react';

import './SectionNavigation.scss'

const SectionNavigation = () => {
    return (
    <div className="section">
        <div className="section__title-box">
            <span className="section__title"></span>
            <i className="section__button -left"></i>
            <i className="section__button -right"></i>
        </div>
        <div className="posts">
            <div className="posts__box-1">
                <span className="posts__title-1"></span>
                <p className="posts__text-1"></p>
            </div>
            <div className="post__box-2">
                <span className="posts__title-2"></span>
                <p className="post__text-2"></p>
            </div>
        </div>
    </div>
    );
};

export default SectionNavigation;
