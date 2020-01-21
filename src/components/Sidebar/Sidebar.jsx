import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import home from '~/assets/img/home.png';
import discover from '~/assets/img/discover.png';
import photos from '~/assets/img/photos.png';
import mail from '~/assets/img/mail.png';
import woman from '~/assets/img/woman.png';
import './Sidebar.scss';

const Sidebar = ({ closeSidebar, isOpen }) => {
    return (
        <div className={classNames('sidebar', { 'is-open': isOpen })}>
            <div className="sidebar__text">
                <div className="sidebar__logo">Logo</div>
                <ul className="sidebar__nav">
                    <div className="sidebar__nav-item-box"><img src={home} className="sidebar__img"/><li className="sidebar__nav-item -active">Home</li></div>
                    <div className="sidebar__nav-item-box"><img src={discover} className="sidebar__img"/><li className="sidebar__nav-item">Discovery</li></div>
                    <div className="sidebar__nav-item-box"><img src={photos} className="sidebar__img"/><li className="sidebar__nav-item">Photos</li></div>
                    <div className="sidebar__nav-item-box"><img src={mail} className="sidebar__img"/><li className="sidebar__nav-item">Contact</li></div>
                    <div className="sidebar__nav-item-box"><img src={woman} className="sidebar__img -round"/><li className="sidebar__nav-item">Profile</li></div>
                </ul>
            </div>
            <button className="sidebar__backdraw" onClick={closeSidebar}></button>
        </div>
    );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    closeSidebar: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
    isOpen: false
};

export default Sidebar;
