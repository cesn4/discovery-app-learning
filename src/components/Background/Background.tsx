import * as React from "react";

import SimpleButton from '~/components/SimpleButton';

import './Background.scss';

const Background = () => {
    return (
        <div className="background">
            <div className="background__news-box">
                <div className="background__title-box">
                    <span className="background_title">WORLD NEWS</span>
                </div>
                <span className="background__subtitle">Amazing places in America to visit.</span>
                <p className="background__paragraph">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
                <SimpleButton title="LEARN MORE" />
            </div>
        </div>
    );
};

export default Background;
