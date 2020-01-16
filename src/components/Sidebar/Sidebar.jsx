import React from 'react';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__text">
                <div className="sidebar__logo">Logo</div>
                <ul className="sidebar__nav">
                    <li><img src="#" className="sidebar__img"/>Home</li>
                    <li><img src="#" className="sidebar__img"/>Discovery</li>
                    <li><img src="#" className="sidebar__img"/>Photos</li>
                    <li><img src="#" className="sidebar__img"/>Contact</li>
                    <li><img src="#" className="sidebar__img"/>Profile</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
