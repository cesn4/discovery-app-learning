import React from 'react';

import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__news">
                <div className="news">
                    <h1 className="news__main-title">WORLD NEWS</h1>
                    <h2 className="news__second-title">Amazing places in America to visit.</h2>
                    <p className="news__paragraph">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
                    <span className="news__button">LEARN MORE</span>
                </div>
            </div>
            <div className="hero__discoveries">
                <div className="discoveries">
                    <h1 className="discoveries__title">DISCOVERIES</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
