import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavigationItem from '~/components/NavigationItem';

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
                    <NavigationItem href={'#'} icon={home} title='Home' active />
                    <NavigationItem href={'#'} icon={discover} title='Discovery' active />
                    <NavigationItem href={'#'} icon={photos} title='Photos' active />
                    <NavigationItem href={'#'} icon={mail} title='Contact' active />
                    <NavigationItem href={'#'} icon={woman} title='Profile' active />
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
