import React from 'react';

import './Discoveries.scss';

const Discoveries = () => {
    return (
        <div className="discoveriesBox">
            <div className="titleBox">
                <h2 className="title">Discoveries</h2>
                <img className="arrowButtons"></img>
            </div>
            <div className="discConBox">
                <div className="discTravel">
                    <div className="travelTitle" >Travel</div>
                    <div className="traveltitle">Article title</div>
                    <p className="travelInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…</p>
                    <ul className="travelTime">
                        <img className="travelClock"></img>
                        <li className="travelTimeCounter">2m ago</li>
                    </ul>
                </div>
                <div className="discTech">
                    <div className="techTitle" >Technology</div>
                    <div className="techtitle">Article title</div>
                    <p className="techInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…</p>
                    <ul className="techTime">
                        <img className="techClock"></img>
                        <li className="techTimeCounter">1h ago</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Discoveries;
