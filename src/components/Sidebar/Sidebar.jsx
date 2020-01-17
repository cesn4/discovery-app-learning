import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.scss';

const Sidebar = ({ drawSidebar }) => {
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
            <button className="sidebar__backdraw" onClick={drawSidebar}></button>
        </div>
    );
};

Sidebar.propTypes = {
    drawSidebar: PropTypes.string.isRequired
};

export default Sidebar;
