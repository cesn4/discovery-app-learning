import React from 'react';

import './WorldNews.scss';

const WorldNews = () => {
    return (
        <div className="newsBox">
            <div className="worldNewsText">
                <h1 className="world-news">World News</h1>
                <h2 className="newsTitle">Amazing places in America to visit</h2>
                <p className="newsInfromation">For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in.</p>
                <button className="learnButton">Learn More</button>
            </div>
        </div>
    );
};

export default WorldNews;
