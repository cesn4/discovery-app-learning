import React from 'react';

import './Discoveries.scss';

const Discoveries = () => {
    return (
        <div className="discoveriesBox">
            <div className="discoText">
                <div className="titleBox">
                    <h2 className="title">Discoveries</h2>
                    <img className="arrowButtonsLeft"></img>
                    <img className="arrowButtonsRight"></img>
                </div>
                <div className="discConBox">
                    <div className="discTravel">
                        <div className="travelTitle" >Travel</div>
                        <div className="travelArticTitle">Article title</div>
                        <p className="travelInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…</p>
                        <ul className="travelTime">
                            <img className="travelClock"></img>
                            <p className="travelTimeCounter">2m ago</p>
                        </ul>
                    </div>
                    <div className="discTech">
                        <div className="techTitle" >Technology</div>
                        <div className="techArticTitle">Article title</div>
                        <p className="techInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…</p>
                        <ul className="techTime">
                            <img className="techClock"></img>
                            <p className="techTimeCounter">1h ago</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discoveries;
