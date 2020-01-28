import React, { FunctionComponent } from 'react';

import sidebarHandler from '~/components/Sidebar/componenets/SidebarLauncher';
import sidebarState from '~/components/Sidebar/componenets/SidebarLauncher';
import SidebarMenu from '~/components/Sidebar/componenets/SidebarMenu';

const Sidebar: FunctionComponent = () => {
    return (
        <div className="sidebar">
            <SidebarMenu isOpen={sidebarState} closeSidebar={sidebarHandler}/>
        </div>
    );
};

export default Sidebar;