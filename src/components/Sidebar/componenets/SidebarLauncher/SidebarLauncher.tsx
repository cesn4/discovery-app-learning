import React, { FunctionComponent } from 'react';

import './SidebarLauncher.scss';
import '~/assets/img/menuIcon.png';

const SidebarLauncher: FunctionComponent<SidebarLauncherProps> = ({ openSidebar }: SidebarLauncherProps) => {
    return (
        <div className="sidebar-launcher" onClick={openSidebar}></div>
    );
};

interface SidebarLauncherProps {
    openSidebar: VoidFunction;
};

export default SidebarLauncher;