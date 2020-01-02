import React from 'react';

import './WorldNews.scss';

const WorldNews = () => {
    return (
        <div className="newsBox">
            <div className="worldNewsText">
                <h1 className="world-news">World News</h1>
                <h2 className="newsTitle"></h2>
                <p className="newsInfromation"></p>
                <a className="button" href="-">Learn More</a>
            </div>
        </div>
    );
};

export default WorldNews;
