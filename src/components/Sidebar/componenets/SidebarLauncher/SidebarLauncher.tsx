import React, { FunctionComponent } from 'react';

import './SidebarLauncher.scss';
import '~/assets/img/menuIcon.png';

const SidebarLauncher: FunctionComponent<SidebarLauncherProps> = ({ onClick }: SidebarLauncherProps) => {
    return (
        <div className="sidebar-launcher" onClick={onClick}></div>
    );
};

interface SidebarLauncherProps {
    onClick: VoidFunction;
};

export default SidebarLauncher;