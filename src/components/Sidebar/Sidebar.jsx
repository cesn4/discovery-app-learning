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
            <div className="sidebar__text-box">
                <div className="sidebar__logo">Logo</div>
                <div className="sidebar__nav">
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={home} title='Home' active />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={discover} title='Discovery' />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={photos} title='Photos' />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={mail} title='Contact' />
                    </div>
                    <div className="sidebar__nav-item">
                        <NavigationItem href={'#'} icon={woman} title='Profile' />
                    </div>
                </div>
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
