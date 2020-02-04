import React, { FunctionComponent } from 'react';

import './SidebarLauncher.scss';
import '~/assets/img/menuIcon.png';

const SidebarLauncher: FunctionComponent<SidebarLauncherProps> = ({
    onClick,
}: SidebarLauncherProps) => {
    return <button className="sidebar-launcher" onClick={onClick}></button>;
};

interface SidebarLauncherProps {
    onClick: VoidFunction;
}

export default SidebarLauncher;
