import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Sidebar.scss';

const Sidebar = ({ drawSidebar, isOpen }) => {
    return (
        <div className={classNames("sidebar", { 'is-open': isOpen })}>
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
    isOpen: PropTypes.bool
};

Sidebar.defaultProps = {
    isOpen: false
}

export default Sidebar;
