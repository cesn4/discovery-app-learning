import React, { FunctionComponent, useState } from 'react';

import './Sidebar.scss';

import SidebarMenu from './components/SidebarMenu';
import SidebarLauncher from './components/SidebarLauncher';

const Sidebar: FunctionComponent = () => {
    const [sidebarState, setSidebarState] = useState(false);

    const sidebarHandler: VoidFunction = () => {
        setSidebarState(!sidebarState);
    };

    return (
        <div className="sidebar">
            <SidebarLauncher onClick={sidebarHandler} />
            <div className="sidebar__menu">
                <SidebarMenu
                    isOpen={sidebarState}
                    closeSidebar={sidebarHandler}
                />
            </div>
        </div>
    );
};

export default Sidebar;
