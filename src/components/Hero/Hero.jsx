import React from 'react';

import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__news">
                <div className="news">
                    <div className="news__title">
                        <span>WORLD NEWS</span>
                    </div>
                    <h2 className="news__subtitle">Amazing places in America to visit.</h2>
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
