import React from 'react';

import SimpleButton from '~/components/SimpleButton';

import './Background.scss';

const Background = () => {
    return (
        <div className="hero__news">
            <div className="hero__news-box">
                <div className="hero__title-box">
                    <span className="hero_title">WORLD NEWS</span>
                </div>
                <span className="hero__subtitle">Amazing places in America to visit.</span>
                <p className="hero__paragraph">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
                <SimpleButton title="LEARN MORE" />
            </div>
        </div>
    );
};

export default Background;
